import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Desktop9.module.css";
import { useEffect } from "react";

const Desktop9 = () => {
  const navigate = useNavigate();

  const onBundleTabContainerClick = useCallback(() => {
    navigate("/keypoints");
  }, [navigate]);

  const onArchieveTextClick = useCallback(() => {
    navigate("/archive");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  return (

   
    <div className={styles.desktop9}>
      <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" />
      <img className={styles.looperBgIcon} alt="" src="/looper-bg.svg" />
      <div className={styles.desktop9Child} />
      <div className={styles.component1}>
        <b className={styles.intellect}>
          <p className={styles.intellect1}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.intellect1}>Slide</p>
        </div>
      </div>
      <div className={styles.component2}>
        <b className={styles.intellect}>
          <p className={styles.intellect1}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.intellect1}>Slide</p>
        </div>
      </div>
      {/* <div className={styles.logout}>Logout</div> */}
      <div className={styles.desktop9Item} />
      <img
        className={styles.carbonnextOutlineIcon}
        alt=""
        src="/carbonnextoutline.svg"
      />
      <img
        className={styles.carbonnextOutlineIcon1}
        alt=""
        src="/carbonnextoutline1.svg"
      />
      <div className={styles.bundleTab} onClick={onBundleTabContainerClick}>
        <div className={styles.aku}>
          <div className={styles.inactiveTab}>
            <div className={styles.specialOffers}>Key Points</div>
          </div>
        </div>
        <div className={styles.nums}>
          <div className={styles.inactiveTab}>
            <div className={styles.specialOffers}>Transcription</div>
          </div>
        </div>
        <div className={styles.allBundles}>
          <div className={styles.activeTab}>
            <div className={styles.specialOffers}>Slides</div>
          </div>
        </div>
      </div>
      <img
        className={styles.desktop9Inner}
        alt=""
        src="/rectangle-111@2x.png"
      />
      <div className={styles.lecture12}>Lecture 12</div>
      <div className={styles.programing}>Programing</div>
      <div className={styles.thDec2023}>20th Dec 2023</div>
      <div className={styles.rectangleDiv} />
      <b className={styles.home} onClick={onHomeTextClick}>
        Home</b>
      <div className={styles.archieve} onClick={onArchieveTextClick}>
        Archive</div>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.desktop9Child1} />
      <button >
        <div className={styles.startPresenting} >
        Start Presenting
          </div>
        
        </button>
      {/* <div className={styles.startPresenting}>Start Presenting</div> */}
      <img
        className={styles.iconParkOutlineslide}
        alt=""
        src="/iconparkoutlineslide.svg"
      />
      <img className={styles.epeditIcon} alt="" src="/epedit.svg" />
      <img className={styles.epeditIcon1} alt="" src="/epedit.svg" />
      <img className={styles.epeditIcon2} alt="" src="/epedit.svg" />
    </div>
  );
};

export default Desktop9;
