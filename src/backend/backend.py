from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import json
from pptx import Presentation
from io import BytesIO
import threading
import pyaudio
import torch
import time
import psycopg2

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"])

# Configure POSTGRES
app.config['POSTGRES_HOST'] = 'ep-shy-wind-a1rxd3hf.ap-southeast-1.aws.neon.tech'
app.config['POSTGRES_USER'] = 'msheharyarqazi'
app.config['POSTGRES_PASSWORD'] = '4uv9AnrLePWG'
app.config['POSTGRES_DB'] = 'intellectslide'


recording_status = {'status': 'record'} #global variable to update recording status
frames=[]
model=0
decoder=0
utils=0
stream=0
start_time=0
# Load the model and get utility functions
model, decoder, utils = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                    model='silero_stt',
                                    language='en',  # also available 'de', 'es'
                                    device=torch.device('cpu'))

# Assign utility functions to global variables
read_batch, split_into_batches, read_audio, prepare_model_input = utils



connection = psycopg2.connect(
    host=app.config['POSTGRES_HOST'],
    user=app.config['POSTGRES_USER'],
    password=app.config['POSTGRES_PASSWORD'],
    dbname=app.config['POSTGRES_DB']
        )

def execute_query(query, values=None):
    try:
       
        
        cur = connection.cursor()
        if values:
            cur.execute(query, values)
        else:
            cur.execute(query)
       

        # result = cur.fetchall()
        connection.commit()
        cur.close()
        # connection.close()
        # print("connection closed")
        return "Database operation successfull"
    except Exception as e:  
        print(f'Database connection error: {str(e)}')
        return f'Database connection error: {str(e)}'
    
def start_record():
    global model
    global decoder
    global utils
    global stream
    global frames
    stream=0

    # Pyaudio recording setup
    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 16000
    RECORD_SECONDS = 10
    WAVE_OUTPUT_FILENAME = "output.wav"

    p = pyaudio.PyAudio()
    stream = p.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    frames_per_buffer=CHUNK)

    print("* recording")
    
    global start_time
    start_time = time.time()

    frames.clear()
    # Start recording
    # for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    global recording_status
    while recording_status['status'] == "record":
        data = stream.read(CHUNK)
        frames.append(data)

    


def stop_recording():

    global model
    global decoder
    global utils
    global stream
    global frames
    
    print("* done recording")

    # Stop recording and close the stream
    p = pyaudio.PyAudio()

    stream.stop_stream()
    stream.close()
    p.terminate()

    import wave
    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 1
    RATE = 16000
    WAVE_OUTPUT_FILENAME = "output.wav"
    # Save the recording to a file
    wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()

    # Load the recording and transcribe
    test_files = [WAVE_OUTPUT_FILENAME]
    batches = split_into_batches(test_files, batch_size=10)
    input = prepare_model_input(read_batch(batches[0]),
                                device=torch.device('cpu'))

    WAVE_OUTPUT_FILENAME = "D:/University/FYP/FYP Repo/updated.wav"
    output = model(input)

    end_time = time.time()
    transcription=""
    for example in output:
        transcription = decoder(example.cpu())
        print(transcription)

    global start_time
    execution_time = end_time - start_time
    print(f"Execution time: {execution_time:.2f} seconds")
    
    query1 = "INSERT INTO presentationslide (transcription) VALUES ( %s);"
    value=[]
    value.append(transcription)
    status=execute_query(query1, value)
    string_data = f'{{"transcription": "{transcription}", "execution_time": {execution_time:.2f}, "status": "{status}"}}'
    print("Received JSON data:", string_data)

    return json.loads(string_data)



@app.route('/add_user', methods=['GET'])
def add_user():
    query2 = "INSERT INTO \"user\"  VALUES ('afzoo', 'shosho', '5677', 'khokho@gmail.com')"

    # Try to connect to the database
    execute_query(query2)
    

    string_data = f'{{"status": "user added"}}'

    return json.loads(string_data)


@app.route('/start_recording', methods=['GET'])
def start_model():
    global recording_status
    recording_status['status'] = "record"
    threading.Thread(target=start_record).start()
    string_data = f'{{"status": "recording started"}}'
    return json.loads(string_data)


@app.route('/stop_recording', methods=['GET'])
def stop_model():
    global recording_status
    recording_status['status'] = "stop_recording"
    return stop_recording()

@app.route('/upload_pptx', methods=['POST'])
def upload_pptx():

    string_data = f'{{"transcription": "done"}}'
    return json.loads(string_data)
    try:
        pptx_file = request.files['pptxFile']   

        # Read the content of the file
        pptx_content = BytesIO(pptx_file.read())

        pptx_data = pptx_file.read()

        # Define the SQL query to insert the PPTX file data into the database
        query = "INSERT INTO \"presentation\" (\"pptxFile\") VALUES (%s);"


        

        # Execute the SQL query to insert the PPTX file data
        execute_query(query, (psycopg2.Binary(pptx_data),))



        query="SELECT MAX(\"presentationId\") FROM \"presentation\";"
        presentationId=9
        print("Presentation Id", presentationId)
        cur = connection.cursor()
        cur.execute(query)
        presentationId = cur.fetchone()[0]
        connection.commit()
        cur.close()
        print("Presentation Id hehehehe", presentationId)
        presentation = Presentation(pptx_content)
      
        for slide_number, slide in enumerate(presentation.slides, start=1):
            query1 = "INSERT INTO slide (\"textContent\", \"slideNo\", \"presentationId\")  VALUES ( %s, %s, %s );"
            print(f"Slide {slide_number}:")
            value=""
            
            for shape in slide.shapes:
                if hasattr(shape, "text"):
                    value = value + shape.text
            
            execute_query(query1, (value, slide_number, presentationId) )
                  
        string_data = f'{{"transcription": "done"}}'
        return json.loads(string_data)
    except Exception as e:
        return {'error': f'An error occurred: {str(e)}'}
    



if __name__ == '__main__':
   app.run(debug=True)