import React, { useState, useEffect, useRef } from "react";
import FileViewer from "offices-viewer";
import "../Styles/SlideViewer.css";

const SlideViewer = (props) => {
  let count = 0;
  const [fileType, setFileType] = useState({});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if(props.filePath)
    {
      setFileType("pptx");
      console.log(props.filePath)
      toggleFullscreen();
    }
   
  }, [props.filePath]);
   

  const slide = (shift) => {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    console.log(elementsWithId)

    let outermostElement = elementsWithId[1];

 
    if (outermostElement) {
      // Now you have the outermost element with the specified ID
      console.log(outermostElement);
    } else {
      console.log('No outermost element found with the specified ID');
    }
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

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-danger">Stop Recording</button>
  {/* <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button> */}
</div>
    </div>
  );
};

export default SlideViewer;
