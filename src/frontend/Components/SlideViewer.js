import React, { useState, useEffect, useRef } from "react";
import FileViewer from "offices-viewer";
import Logo from "../Images/logo.png"
import "../Styles/SlideViewer.css";
import { useNavigate } from "react-router-dom";


const SlideViewer = (props) => {
  const [fileType, setFileType] = useState({});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideNum, setslideNum] = useState(0);  
  const [elementsArray, setElementArray] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const speechRecognitionRef = useRef(null);

  const navigate = useNavigate(); // Use useNavigate hook here



  useEffect(() => {
    // Setup speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      speechRecognitionRef.current = new SpeechRecognition();
      speechRecognitionRef.current.continuous = true;
      speechRecognitionRef.current.lang = 'en-US';
      speechRecognitionRef.current.interimResults = true;
      speechRecognitionRef.current.onresult = handleVoiceCommand;
    }

    // Start listening to speech
    startListening();

    return () => {
      stopListening();
    };
  }, [elementsArray]);

  const handleVoiceCommand = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript.trim().toLowerCase();
      if (transcript === "next slide" && event.results[i].isFinal) {
        slide(1566.39991);
      } else if (transcript === "previous slide" && event.results[i].isFinal) {
        slide(-1566.39991);
      }
    }
  };

  const startListening = () => {
    if (!isListening && speechRecognitionRef.current) {
      speechRecognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (isListening && speechRecognitionRef.current) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    }
  };







  useEffect(() => {
    setTimeout(() => {
      const elementsWithId = document.querySelectorAll(".pg-viewer");
      let outermostElement = elementsWithId[1];
      outermostElement.scrollLeft = parseInt(localStorage.getItem('scroll'));
     
    }, 10);
     
  }, [slideNum]); 

  useEffect(() => {
    
    setTimeout(() => {
      setElements()
    }, 1000);
     
  }, []); 


  useEffect(() => {
    

  }, [elementsArray]); 




  useEffect(() => {
    if (props.filePath) {
      setFileType("pptx");
      toggleFullscreen();
    }
  }, [props.filePath]); 


  
 

  function setElements() {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    let outermostElement = elementsWithId[1];

    let childrenDivs = outermostElement.children
    let grandChildren=childrenDivs[0].children

    setElementArray( Array.from(grandChildren));
    
  }


  


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 's') {
        // Call your function here
        // console.log("s clicked") 
        matchContext();
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [slideNum]); 


  useEffect(() => {
    // Function to periodically check for updates from the backend
    const checkForUpdates = async () => {
      try {
       matchContext();
      } catch (error) {
        console.log('Error:', error);
      }
    };

    // Start checking for updates every 5 seconds
    const intervalId = setInterval(checkForUpdates, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [slideNum]);


  const matchContext = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/match_context');
      if (!response.ok) {
        throw new Error('Failed to fetch data from the server');
      }
      const data = await response.json();
      console.log(data)
      console.log("bullet point to be highlighted: ");
      console.log(data['matched sentence']) 
      
      if(data['matched sentence'] != ""){

      


      const elements=elementsArray[slideNum - 1 ]
      const bulletPointsDiv = document.getElementsByClassName('h-left');
      const bulletPoints=Array.from(bulletPointsDiv)
      // console.log(bulletPoints)


      bulletPoints.forEach(element => {
        element.style.backgroundColor = '';
    });


      bulletPoints.forEach(element => {
        const textContent = element.innerText;
        let stringWithoutSpecialChars = removeSpecialCharacters(textContent);
        let stringWithoutSpecialChars2 = removeSpecialCharacters(data['matched sentence']);
        let stringWithoutSpecialChars3= stringWithoutSpecialChars.replace(/\u00A0/, " ");
        // console.log("on slide", stringWithoutSpecialChars3);
        // console.log("on db", stringWithoutSpecialChars2);


        if (stringWithoutSpecialChars3 == stringWithoutSpecialChars2  ) {
          console.log("matched directly");
          element.style.backgroundColor = 'yellow';
      }

      else if (stringWithoutSpecialChars3.includes(stringWithoutSpecialChars2) &&  stringWithoutSpecialChars2 != " "  ) {
        console.log("matched through substring 1");
        element.style.backgroundColor = 'yellow';
    }

    else if (stringWithoutSpecialChars2.includes(stringWithoutSpecialChars3) &&  stringWithoutSpecialChars3 != " "  ) {
      console.log("matched through substring 2");
      element.style.backgroundColor = 'yellow';
  }
      else if (areStringsEqual(stringWithoutSpecialChars3, stringWithoutSpecialChars2)  ) {
        console.log("matched through levenshtein distance");
        element.style.backgroundColor = 'yellow';
        
    }
 




    });

    
  }
  else{
    const elements=elementsArray[slideNum - 1 ]
    const bulletPointsDiv = document.getElementsByClassName('h-left');
    const bulletPoints=Array.from(bulletPointsDiv)
    bulletPoints.forEach(element => {
      element.style.backgroundColor = '';
  });
  }
     
  } catch (error) {
      console.log('Error:', error.message);
    }
  };


  function removeSpecialCharacters(str) {
    // Use a regular expression to replace non-breaking spaces and other special characters with an empty string
    return str.replace(/[^\w\s]/g, '');
}



function areStringsEqual(str1, str2) {    //to handle case of nearly equal
  const levenshtein = require('fast-levenshtein');
  // Calculate the Levenshtein distance between the two strings
  const distance = levenshtein.get(str1, str2);

  // Define a threshold for acceptable similarity
  const threshold = 10; // Adjust this value based on your requirements

  // Compare the distance with the threshold
  return distance <= threshold;
}
  const onStopPresentingClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/stop_recording');
      console.log("fetching data")
      const data = await response.json();
      console.log(data); 
      toggleFullscreen();
      navigate("/keypoints"); // Navigate using the navigate function
    } catch (error) {
      console.log('Error:', error);
    }
  };





  const slide = (shift) => {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    let outermostElement = elementsWithId[1];
    outermostElement.scrollLeft += shift;
    localStorage.setItem('scroll', JSON.stringify(outermostElement.scrollLeft));
    let operation = shift > 0 ? "next" : "previous";

    // Update the slide number locally (this may need further adjustment based on your logic)
    // setslideNum(prev => prev + (shift > 0 ? 1 : -1));

    const elements=elementsArray[slideNum - 1 ]
    const bulletPointsDiv = document.getElementsByClassName('h-left');
    const bulletPoints=Array.from(bulletPointsDiv)
    bulletPoints.forEach(element => {
      element.style.backgroundColor = '';
  });
    
    const formData = new FormData();
    formData.append('operation', operation);


    fetch('http://127.0.0.1:5000/update_slide_count', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
          // setslideNum(data["updated slide number"]);
    })
      .catch(error => {
        console.error('Error:', error);
      });

   
}





 

  const [isFullscreen, setIsFullscreen] = useState(false);

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }

    // Update state
    setIsFullscreen(!isFullscreen);
  };


  const renderImage = () => {
    return (
      <img
        src={Logo} // Provide the path to your image file
        alt="Image"
        style={{
          position: "fixed",
          top: "100px",
          right: "170px",
          width: "200px",
          height: "auto",
          zIndex: "9999",
        }}
      />
    );
  };

  return (
    <div className="slideViewerContainer" >
      {renderImage()}
     

      {props.filePath && (
        <div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            onClick={() => slide(-1566.39991)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            onClick={() => slide(1566.39991)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div id="hehe">
            <FileViewer fileType={fileType} filePath={props.filePath} slideIndex={currentSlideIndex} />
          </div>
        </div>
      )}

<div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-danger" onClick={onStopPresentingClick}>Stop Recording</button>
  {/* <button type="button" className="btn btn-secondary">Middle</button>
  <button type="button" className="btn btn-secondary">Right</button> */}
</div>
    </div>
  );
};

export default SlideViewer;
