import React, { useState, useEffect } from "react";
import FileViewer from "offices-viewer";
import "../frontend/SlideViewer.css"

const SlideViewer = () => {
  const [fileType, setFileType] = useState({});
  const [uri, setUri] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [inputHidden, setInputHidden] = useState("visible");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileType("pptx");
    setUri(URL.createObjectURL(file));
    setCurrentSlideIndex(0); // Reset slide index when a new file is selected
    toggleFullscreen();
    setInputHidden("hidden")
  };

  const [isFullscreen, setIsFullscreen] = useState(false);


  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }

    // Update state
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <input style={{visibility: inputHidden}} type="file" accept=".pptx" onChange={handleFileChange} />

      {uri && (
        <div className="slideViewerContainer">
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
         
          <FileViewer fileType={fileType} filePath={uri} slideIndex={currentSlideIndex} />
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SlideViewer;
