import React, { useState, useEffect, useRef } from "react";
import FileViewer from "offices-viewer";
import "../frontend/SlideViewer.css";

const SlideViewer = () => {
  let count = 0;
  const navRef = useRef();
  const [fileType, setFileType] = useState({});
  const [uri, setUri] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [inputHidden, setInputHidden] = useState(false);

  const slide = (shift) => {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    console.log(elementsWithId)

    let outermostElement = elementsWithId[1];

    // elementsWithId.forEach(element => {
    //   let currentElement = element;
    //   while (currentElement.parentNode) {
    //     if (!currentElement.parentNode.matches('#pg-viewer ')) {
    //       // If the parent node is not another element with the same ID,
    //       // then this element is the outermost one
    //       outermostElement = currentElement;
    //       break;
    //     }
    //     currentElement = currentElement.parentNode;
    //   }
    // });
    
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
 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileType("pptx");
    setUri(URL.createObjectURL(file));
    setCurrentSlideIndex(0); // Reset slide index when a new file is selected
    toggleFullscreen();
    setInputHidden(true);
  };

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
      <input
        className={inputHidden ? "hidden-element" : ""}
        type="file"
        accept=".pptx"
        onChange={handleFileChange}
      />

      {uri && (
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
            <FileViewer fileType={fileType} filePath={uri} slideIndex={currentSlideIndex} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideViewer;
