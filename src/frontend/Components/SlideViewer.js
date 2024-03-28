import React, { useState, useEffect, useRef } from "react";
import FileViewer from "offices-viewer";
import "../Styles/SlideViewer.css";
import { useNavigate } from "react-router-dom";


const SlideViewer = (props) => {
  const [fileType, setFileType] = useState({});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideNum, setslideNum] = useState(0);  
  const [elementsArray, setElementArray] = useState([]);  

  const navigate = useNavigate(); // Use useNavigate hook here


  useEffect(() => {
    console.log("slideNum" , slideNum)
    setTimeout(() => {
      const elementsWithId = document.querySelectorAll(".pg-viewer");
      let outermostElement = elementsWithId[1];
      outermostElement.scrollLeft = parseInt(localStorage.getItem('scroll'));
     
    }, 10);
     
  }, [slideNum]); 

  useEffect(() => {
    
    setTimeout(() => {
      setElements()
      console.log("in set Elements" , slideNum)
    }, 1000);
     
  }, []); 


  useEffect(() => {
    
    console.log("elementArray", elementsArray)

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
  }, [slideNum]); // Empty dependency array ensures that the effect runs only once on mount

  const matchContext = async () => {
    try {

      console.log("slideNum in matchContext" , slideNum )
      const response = await fetch('http://127.0.0.1:8080/match_context');
      const data = await response.json();
      console.log(data['matched sentence'])
      


      const elements=elementsArray[slideNum - 1 ]
      const bulletPointsDiv = document.getElementsByClassName('h-left');
      const bulletPoints=Array.from(bulletPointsDiv)
      console.log(bulletPoints)


      bulletPoints.forEach(element => {
        const textContent = element.innerText;
        let stringWithoutSpecialChars = removeSpecialCharacters(textContent);
        let stringWithoutSpecialChars2 = removeSpecialCharacters(data['matched sentence']);
        let stringWithoutSpecialChars3= stringWithoutSpecialChars.replace(/\u00A0/, " ");
        // console.log("on slide", stringWithoutSpecialChars3);
        // console.log("on db", stringWithoutSpecialChars2);


        if (stringWithoutSpecialChars3 == stringWithoutSpecialChars2  ) {
          console.log("hurrah", textContent, data['matched sentence']);
          element.style.backgroundColor = 'yellow';
      }

      if (areStringsEqual(stringWithoutSpecialChars3, stringWithoutSpecialChars2)  ) {
        console.log("bhurrah", textContent, data['matched sentence']);
        element.style.backgroundColor = 'yellow';
    }




    });

    

     
  } catch (error) {
      console.log('Error:', error);
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
      const response = await fetch('http://127.0.0.1:8080/stop_recording');
      console.log("fetching data")
      const data = await response.json();
      console.log(data); 
      toggleFullscreen();
      navigate("/"); // Navigate using the navigate function
    } catch (error) {
      console.log('Error:', error);
    }
  };





  const slide = (shift) => {
    const elementsWithId = document.querySelectorAll('.pg-viewer');
    let outermostElement = elementsWithId[1];
    outermostElement.scrollLeft += shift;
    localStorage.setItem('scroll', JSON.stringify(outermostElement.scrollLeft));
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


    fetch('http://127.0.0.1:8080/update_slide_count', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
          setslideNum(data["updated slide number"]);
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
