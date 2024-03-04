import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import styles from "../Styles/home.module.css";
import React, { useState } from 'react';
import { upload } from "@testing-library/user-event/dist/upload";

const Desktop11 = (props) => {
  const navigate = useNavigate();

  const onArchiveTextClick = useCallback(() => {
    navigate("/archive");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }, []);

  const onRectangle12Click = useCallback(() => {
    navigate("/startpresenting");
  }, [navigate]);

  // Inside your functional component:
const [selectedFiles, setSelectedFiles] = useState(null);


  const handleFileChange = (event) => {
    uploadFile(event)
    event.target.value = '';
    
  };

 

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);



  function uploadFile(event) {
      const file = event.target.files[0];
      props.setFilePath(URL.createObjectURL(file));
      
      if (file) {
        console.log(file)
        // Check if the file has a .pptx extension
        if (file.name.toLowerCase().endsWith('.pptx')) {
          const formData = new FormData();
          formData.append('pptxFile', file);

          
          // Send the file to the Flask backend using fetch
          fetch('http://127.0.0.1:5000/upload_pptx', {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(data => {
              console.log('Response from server:', data);
            })
            .then(navigate("/startpresenting"))
            .catch(error => {
              console.error('Error:', error);
            });
          // setSelectedFiles(null);

        } 
        else {
          console.log('Invalid file type. Please choose a .pptx file.');
        }
      }
    }
  

  return (
    <div className={styles.desktop11}>
      <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" />
      <img className={styles.looperBgIcon} alt="" src="/looper-bg.svg" />
      <div className={styles.desktop11Child} />
      <div className={styles.powerfulPresentationsEffortContainer}>
        <p
          className={styles.powerfulPresentations}
        >{`Powerful Presentations,  Effortlessly `}</p>
        <p className={styles.powerfulPresentations}>{` `}</p>
      </div>
      <img className={styles.desktop11Item} alt="" src="/rectangle-12.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <div className={styles.illuminateYourContentContainer}>
        <p
          className={styles.powerfulPresentations}
        >{`Illuminate Your Content, `}</p>
        <p className={styles.powerfulPresentations}>
          Dynamic Highlighting that Inspires Learning!
        </p>
      </div>
      <img className={styles.desktop11Inner} alt="" src="/rectangle-14.svg" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-17.svg" />
      <img className={styles.illustrationIcon} alt="" src="/illustration.svg" />
      <div className={styles.visualizeKnowledgeFigureContainer}>
        <p className={styles.powerfulPresentations}>Visualize Knowledge</p>
        <p className={styles.powerfulPresentations}>
          {" "}
          Figure Identification that Unleashes Insights!
        </p>
      </div>
      <div className={styles.captureKnowledgeKey}>
        Capture Knowledge: Key Point Identification and Transcription for
        Seamless Learning!
      </div>
      <div className={styles.component1}>
        <b className={styles.intellect}>
          <p className={styles.powerfulPresentations}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.powerfulPresentations}>Slide</p>
        </div>
      </div>
      <div className={styles.component2}>
        <b className={styles.intellect}>
          <p className={styles.powerfulPresentations}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.powerfulPresentations}>Slide</p>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.lecture}>LECTURE</div>
      <div className={styles.logout}>Logout</div>
      <b className={styles.home} onClick={onHomeTextClick}>Home</b>
      <div className={styles.archieve} onClick={onArchiveTextClick}>
        Archive
      </div>
      <div className={styles.aboutUs} onClick={onAboutTextClick}>About Us</div>
      <div className={styles.desktop11Child1} />
      <div className={styles.desktop11Child2} />
      <div className={styles.mobileLoginpana}>
        <img
          className={styles.backgroundCompleteIcon}
          alt=""
          src="/loopergroup.svg"
        />
        <img
          className={styles.backgroundSimpleIcon}
          alt=""
          src="/loopergroup.svg"
        />
        <img className={styles.floorIcon} alt="" src="/floor.svg" />
        <img className={styles.plantIcon} alt="" src="/plant.svg" />
        <div className={styles.device}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.wow}>WOW</div>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <div className={styles.deviceChild} />
          <div className={styles.deviceItem} />
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
          <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
          <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
          <img className={styles.vectorIcon10} alt="" src="/vector10.svg" />
          <img className={styles.vectorIcon11} alt="" src="/vector11.svg" />
          <img className={styles.vectorIcon12} alt="" src="/vector12.svg" />
          <img className={styles.vectorIcon13} alt="" src="/vector13.svg" />
          <img className={styles.vectorIcon14} alt="" src="/vector14.svg" />
          <img className={styles.vectorIcon15} alt="" src="/vector15.svg" />
          <img className={styles.vectorIcon16} alt="" src="/vector16.svg" />
          <img className={styles.vectorIcon17} alt="" src="/vector17.svg" />
          <img className={styles.vectorIcon18} alt="" src="/vector18.svg" />
          <img className={styles.vectorIcon19} alt="" src="/vector19.svg" />
          <img className={styles.vectorIcon20} alt="" src="/vector20.svg" />
          <img className={styles.vectorIcon21} alt="" src="/vector21.svg" />
          <img className={styles.vectorIcon22} alt="" src="/vector22.svg" />
          <img className={styles.vectorIcon23} alt="" src="/vector23.svg" />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.vectorIcon24} alt="" src="/vector24.svg" />
          <img className={styles.vectorIcon25} alt="" src="/vector25.svg" />
          <img className={styles.vectorIcon26} alt="" src="/vector26.svg" />
          <img className={styles.vectorIcon27} alt="" src="/vector27.svg" />
        </div>
        <img
          className={styles.speechBubbleIcon}
          alt=""
          src="/speechbubble.svg"
        />
        <img className={styles.characterIcon} alt="" src="/character.svg" />
      </div>
      {/* <img className={styles.maskGroupIcon1} alt="" src="/mask-group1.svg" /> */}
      <img className={styles.logosjupyterIcon} alt="" src="/logosjupyter.svg" />
      <img className={styles.vectorIcon28} alt="" src="/vector28.svg" />
      <img
        className={styles.skillIconsdjango}
        alt=""
        src="/skilliconsdjango.svg"
      />
      <img className={styles.vectorIcon29} alt="" src="/vector29.svg" />
      <img className={styles.logosfigmaIcon} alt="" src="/logosfigma.svg" />
      <img className={styles.vectorIcon30} alt="" src="/vector30.svg" />
      <img className={styles.vectorIcon31} alt="" src="/vector31.svg" />
      <div className={styles.contactUs}>CONTACT US</div>
      <div className={styles.startTourButton}>
        <div className={styles.startTourButtonChild} />
        <div className={styles.emailUs}>Email Us</div>
      </div>
      <img
        className={styles.icbaselineAttachEmailIcon}
        alt=""
        src="/icbaselineattachemail.svg"
      />
      {/* <img className={styles.vectorIcon32} alt="" src="/vector32.svg" /> */}
      {/* <img className={styles.vectorIcon33} alt="" src="/vector33.svg" />
      <img className={styles.vectorIcon34} alt="" src="/vector34.svg" />
      <img className={styles.vectorIcon35} alt="" src="/vector35.svg" /> */}
      <img className={styles.groupIcon1} alt="" src="/group1.svg" />
      <img className={styles.vectorIcon36} alt="" src="/vector36.svg" />
      <img className={styles.vectorIcon37} alt="" src="/vector37.svg" />
      <div className={styles.ourTeam}>Our Team</div>
      <div className={styles.features}>Features</div>
      <div className={styles.abdurRaheem}>Abdur Raheem</div>
      <div className={styles.slides}>Slides</div>
      <div className={styles.sheharyarQazi}>Sheharyar Qazi</div>
      <div className={styles.keyPoints}>Key Points</div>
      <div className={styles.ahmedYar}>Ahmed Yar</div>
      <div className={styles.emphasis}>Emphasis</div>
      <div className={styles.lectures}>Lectures</div>
      <div className={styles.desktop11Child3} />
      <div className={styles.desktop11Child4} />
      <img
        className={styles.fluentslideHide24FilledIcon}
        alt=""
        src="/fluentslidehide24filled.svg"
      />
      <img
        className={styles.fluentslideGrid24RegularIcon}
        alt=""
        src="/fluentslidegrid24regular.svg"
      />
      <img
        className={styles.iconParkOutlineslide}
        alt=""
        src="/iconparkoutlineslide1.svg"
      />
      <div className={styles.desktop11Child5} onClick={onRectangle12Click} />
      <img
        className={styles.materialSymbolsattachFileAIcon}
        alt=""
        src="/materialsymbolsattachfileadd.svg"
      />
     
      <div className={styles.chooseFiles}>
        <label htmlFor="file-upload" style={{  cursor: 'pointer' }}>Choose Files</label>
        <input
          id="file-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={(event) => handleFileChange(event)}
        />
      </div>
      <div className={styles.orDropFiles}>or drop files here</div>
      <div className={styles.lineDiv} />
      <img
        className={styles.mingcutedownFillIcon}
        alt=""
        src="/mingcutedownfill1.svg"
      />
    </div>
  );
};

export default Desktop11;
