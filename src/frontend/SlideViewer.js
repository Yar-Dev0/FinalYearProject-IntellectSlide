import React, { useState, useEffect } from "react";
import FileViewer from "offices-viewer";
import "../frontend/SlideViewer.css"

const SlideViewer = () => {
  const [fileType, setFileType] = useState({});
  const [uri, setUri] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileType("pptx");
    setUri(URL.createObjectURL(file));
    setCurrentSlideIndex(0); // Reset slide index when a new file is selected
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, numberOfSlides - 1));
  };

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    console.log("Current Slide Index: ", currentSlideIndex);
  }, [currentSlideIndex]);

  // Assume you know the total number of slides, replace numberOfSlides with the actual number
  const numberOfSlides = 10;

  return (
    <div>
      <input type="file" accept=".pptx" onChange={handleFileChange} />
      {uri && (
        <div className="slideViewerContainer">
          <FileViewer fileType={fileType} filePath={uri} slideIndex={currentSlideIndex} />
          <button onClick={handlePreviousSlide} disabled={currentSlideIndex === 0}>
            Previous Slide
          </button>
          <button onClick={handleNextSlide} disabled={currentSlideIndex === numberOfSlides - 1}>
            Next Slide
          </button>
        </div>
      )}
    </div>
  );
};

export default SlideViewer;
