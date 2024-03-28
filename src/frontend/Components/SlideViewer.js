import React, { useState, useEffect } from "react";
import FileViewer from "offices-viewer";
import "../Styles/SlideViewer.css";
import { useNavigate } from "react-router-dom";

const SlideViewer = (props) => {
  const [fileType, setFileType] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
  
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      if (command === 'next slide') {
        slide(1566.39991);
      } else if (command === 'previous slide') {
        slide(-1566.39991);
      }
    };
  
    recognition.onend = () => {
      recognition.start(); // Start recognition again when it ends
    };
  
    recognition.start(); // Start recognition initially
  
    return () => {
      recognition.stop();
    };
  }, []);
  

  const slide = (shift) => {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    const operation = shift > 0 ? "next" : "previous";

    const formData = new FormData();
    formData.append('operation', operation);

    fetch('http://127.0.0.1:5000/update_slide_count', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    const outermostElement = elementsWithId[1];
    const totalScrollableWidth = outermostElement.scrollWidth - outermostElement.clientWidth;
    outermostElement.scrollLeft += shift;
  };

  const onStopPresentingClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/stop_recording');
      console.log("fetching data")
      const data = await response.json();
      console.log(data);
      toggleFullscreen();
      navigate("/KeyPoints");
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    if(props.filePath)
    {
      setFileType("pptx");
      toggleFullscreen();
    }
   
  }, [props.filePath]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="slideViewerContainer">
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
            <FileViewer fileType={fileType} filePath={props.filePath} />
          </div>
        </div>
      )}

      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger" onClick={onStopPresentingClick}>Stop Recording</button>
      </div>
    </div>
  );
};

export default SlideViewer;
