import React, { useState, useEffect, useRef } from "react";
import FileViewer from "offices-viewer";
import "../Styles/SlideViewer.css";
import { useNavigate } from "react-router-dom";


const SlideViewer = (props) => {
  let count = 0;
  const [fileType, setFileType] = useState({});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate(); // Use useNavigate hook here


  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 's') {
        // Call your function here
        console.log("s clicked")
        matchContext();
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const matchContext = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/match_context');
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.log('Error:', error);
    }
  };



  const onStopPresentingClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/stop_recording');
      console.log("fetching data")
      const data = await response.json();
      console.log(data); 
      toggleFullscreen();
      navigate("/"); // Navigate using the navigate function
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
   

  const slide = (shift) => {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    let operation="next"
    

    if (shift > 0)
    {
      operation= "next"
    }
    else if (shift < 0)
    {
      operation= "previous"
    }
    const formData = new FormData();
    formData.append('operation', operation);
    console.log(operation)


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

    let outermostElement = elementsWithId[1];

 
    // outermostElement.scrollTo(1000, 0)
    const totalScrollableWidth = outermostElement.scrollWidth - outermostElement.clientWidth;
    // outermostElement.scrollLeft += 1566.39991; 
    outermostElement.scrollLeft += shift;
    // outermostElement.scrollLeft += totalScrollableWidth; 
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

  return (
    <div className="slideViewerContainer" >
     

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
