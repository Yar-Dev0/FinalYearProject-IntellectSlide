from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import json
from pptx import Presentation
from io import BytesIO
import threading
import os
from flask_socketio import SocketIO
import pyaudio
import torch
import torchaudio
import requests
import os
import numpy as np
import time



app = Flask(__name__)
socketio = SocketIO(app)
cors = CORS(app, origins=["http://localhost:3000"])

# socketio = SocketIO(app, cors_allowed_origins="*")  # Set cors_allowed_origins to "*" or your specific frontend URL


# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'intellectslide-db'

mysql = MySQL(app)

recording_status = {'status': 'record'} #global variable to update recording status
frames=[]
model=0
decoder=0
utils=0
stream=0
# Load the model and get utility functions
model, decoder, utils = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                    model='silero_stt',
                                    language='en',  # also available 'de', 'es'
                                    device=torch.device('cpu'))

# Assign utility functions to global variables
read_batch, split_into_batches, read_audio, prepare_model_input = utils

def execute_query(query, values=None):
    try:
        cur = mysql.connection.cursor()
        if values:
            cur.execute(query, values)
        else:
            cur.execute(query)

        result = cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return "DB Action performed successfully"
    except Exception as e:  
        return f'Database connection error: {str(e)}'

# @app.route('/add_user')
# def add_user():
#     query1="select * from user"
#     query2="INSERT INTO user (username, name, password, email) VALUES ('afzoo ', 'shosho', '5677', 'khokho@gmail.com')"
#     # Try to connect to the database
#     execute_query(query2)
#     return json.loads("done")



def record():
    global model
    global decoder
    global utils
    global stream

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

    global frames
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
    p = pyaudio.PyAudio()
       

    print("* done recording")

    # Stop recording and close the stream
    stream.stop_stream()
    stream.close()
    p.terminate()
    start_time = time.time()
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
    for example in output:
        transcription = decoder(example.cpu())
        print(transcription)


    execution_time = end_time - start_time
    print(f"Execution time: {execution_time:.2f} seconds")
    
    query1 = "INSERT INTO temppresentationslide (transcription) VALUES ( %s);"
    value=[]
    value.append(transcription)
    status=execute_query(query1, value)
    string_data = f'{{"transcription": "{transcription}", "execution_time": {execution_time}, "status": "{status}"}}'
    print("Received JSON data:", string_data)

    return json.loads(string_data)



@app.route('/start_recording', methods=['GET'])
def voice_model():
    threading.Thread(target=record).start()
    string_data = f'{{"transcription": "lol"}}'
    return json.loads(string_data)


@app.route('/stop_recording', methods=['GET'])
def stop_model():
    global recording_status
    recording_status['status'] = "stop_recording"
    return stop_recording()

    


    



    

@app.route('/upload_pptx', methods=['POST'])
def upload_pptx():
    try:
        pptx_file = request.files['pptxFile']

        # Read the content of the file
        pptx_content = BytesIO(pptx_file.read())

        presentation = Presentation(pptx_content)

        for slide_number, slide in enumerate(presentation.slides, start=1):
            print(f"Slide {slide_number}:")
            for shape in slide.shapes:
                if hasattr(shape, "text"):
                    
                    query1 = "INSERT INTO tempslides (slideText) VALUES ( %s);"
                    value=[]
                    value.append(shape.text)
                    print(value)
                    status=execute_query(query1, value)
            print("\n")

        
        string_data = f'{{"transcription": "done"}}'

        return json.loads(string_data)

    except Exception as e:
        return {'error': f'An error occurred: {str(e)}'}
    


    



if __name__ == '__main__':
   app.run(debug=True)