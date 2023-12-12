import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop13.module.css";

const Desktop13 = () => {
  const navigate = useNavigate();

  const onArchieveTextClick = useCallback(() => {
    navigate("/desktop-12");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/desktop-11");
  }, [navigate]);


  const onStartPresentingClick = async () => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/voice_model');
        console.log("fetching data")
        const data = await response.json();
        console.log(data); 
      } catch (error) {
        console.log('Error:', error);
      }
    };
  
    fetchData();
  }



  return (
    <div className={styles.desktop13}>
      <img className={styles.bihighlightsIcon} alt="" src="/bihighlights.svg" />
      <img
        className={styles.carbonchartPointIcon}
        alt=""
        src="/carbonchartpoint.svg"
      />
      <img className={styles.bxhighlightIcon} alt="" src="/bxhighlight.svg" />
      <img
        className={styles.iconParkOutlinetext}
        alt=""
        src="/iconparkoutlinetext.svg"
      />
      <div className={styles.desktop13Child} />
      <div className={styles.desktop13Item} />
      <div className={styles.desktop13Inner} />
      <div className={styles.ellipseDiv} />
      <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" />
      <img className={styles.looperBgIcon} alt="" src="/looper-bg.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.powerfulPresentationsEffortContainer}>
        <p
          className={styles.powerfulPresentations}
        >{`Powerful Presentations,  Effortlessly `}</p>
        <p className={styles.powerfulPresentations}>{` `}</p>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-12.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <div className={styles.illuminateYourContentContainer}>
        <p
          className={styles.powerfulPresentations}
        >{`Illuminate Your Content, `}</p>
        <p className={styles.powerfulPresentations}>
          Dynamic Highlighting that Inspires Learning!
        </p>
      </div>
      <img className={styles.desktop13Child1} alt="" src="/rectangle-14.svg" />
      <img className={styles.desktop13Child2} alt="" src="/rectangle-17.svg" />
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
      <div className={styles.desktop13Child3} />
      <div className={styles.lecture}>LECTURE</div>
      <div className={styles.logout}>Logout</div>
      <b className={styles.home} onClick={onHomeTextClick}>
        Home</b>
      <div className={styles.archieve} onClick={onArchieveTextClick}>
        Archive
      </div>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.desktop13Child4} />
      <div className={styles.desktop13Child5} />
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
      {/* <img className={styles.vectorIcon32} alt="" src="/vector32.svg" />
      <img className={styles.vectorIcon33} alt="" src="/vector33.svg" />
      <img className={styles.vectorIcon34} alt="" src="/vector34.svg" />
      <img className={styles.vectorIcon35} alt="" src="/vector35.svg" >*/
      <img className={styles.groupIcon1} alt="" src="/group1.svg" /> }
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
      <div className={styles.desktop13Child6} />
      <div className={styles.desktop13Child7} />
      <button className={styles.startPresenting} onClick={onStartPresentingClick}>Start Presenting</button>
      <div className={styles.transcription}>Transcription</div>
      <div className={styles.runtimeTextHighlighting}>
        Runtime Text Highlighting
      </div>
      <div className={styles.runtimeFigureHighlighting}>
        Runtime Figure Highlighting
      </div>
      <div className={styles.runtimeFigureHighlighting}>
        Runtime Figure Highlighting
      </div>
      <div className={styles.keyPointsGeneration}>Key Points generation</div>
      <img
        className={styles.iconParkOutlineslide}
        alt=""
        src="/iconparkoutlineslide.svg"
      />
      <img
        className={styles.desktop13Child8}
        alt=""
        src="/rectangle-11@2x.png"
      />
    </div>
  );
};

export default Desktop13;
