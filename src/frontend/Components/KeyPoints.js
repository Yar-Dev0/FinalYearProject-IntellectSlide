import styles from "../Styles/Desktop14.module.css";
import React, { useState, useCallback } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Desktop14 = () => {
 
  const navigate = useNavigate();

  const onArchieveTextClick = useCallback(() => {
    navigate("/archive");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const [slidedataInfo, setSlideData] = useState([]); // State to store slide data
  const [fetchDate, setFetchDate] = useState(null);
  const [presentationInfo, setPresentationInfo] = useState([]); // State variable to store presentation titles and upload dates

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/presentation_data");
        const data = await response.json();
        console.log(data);
        if (data && data.length > 0) {
          const presentationData = data.map(item => ({
            title: item.title,
            uploadDate: item.uploadDate
          }));
          setPresentationInfo(presentationData); // Set the fetched presentation data
        }
      } catch (error) {
        console.error("Error fetching presentation data:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []);







  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/recent_slide_data');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const currentDate = new Date();
          console.log('Fetched at:', currentDate); // Print the current date
          setFetchDate(currentDate); // Update fetchDate state with the current date

          if (Array.isArray(data) && data.length > 0) {
            setSlideData(data); // Set the fetched data directly to the state
          } else {
            console.error('Slide data is not in the expected format');
          }
        } else {
          console.error('Failed to fetch slide data');
        }
      } catch (error) {
        console.error('Error fetching slide data:', error);
      }
    };

    fetchSlideData(); // Fetch slide data when component mounts
  }, []);

  

  return (
    
    <div className={styles.desktop14}>
      <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" />
      <img className={styles.looperBgIcon} alt="" src="/looper-bg.svg" />
      <div className={styles.desktop14Child} />
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
      <div className={styles.logout}>Logout</div>
      <div className={styles.desktop14Item} />
      <div className={styles.bundleTab}>
        {/* <div className={styles.aku}>
          <div className={styles.inactiveTab}>
            <div className={styles.specialOffers}>Slides</div>
          </div>
        </div> */}
        {/* <div className={styles.nums}>
          <div className={styles.inactiveTab}>
            <div className={styles.specialOffers}>Transcribed</div>
          </div>
        </div> */}
        <div className={styles.allBundles}>
          <div className={styles.activeTab}>
            <div className={styles.specialOffers}>Key Points</div>
          </div>
        </div>
      </div>
      <div className={styles.lecture12}>Lecture</div>
      <div className={styles.programing}>{/* Check if presentationInfo array is not empty */}
  {presentationInfo.length > 0 && (
    <div>{presentationInfo[presentationInfo.length - 1].title}</div>
  )}</div>
      <div className={styles.thDec2023}> {fetchDate && fetchDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })}</div>
      <div className={styles.desktop14Inner} />
      <b className={styles.home} onClick={onHomeTextClick}>
        Home</b>
      <div className={styles.archieve} onClick={onArchieveTextClick}>
        Archive</div>
      <div className={styles.aboutUs}>About Us</div>
      {/* <div className={styles.rectangleDiv} /> */}
      {/* <div className={styles.startPresenting}>Start Presenting</div>
      <img
        className={styles.iconParkOutlineslide}
        alt=""
        src="/iconparkoutlineslide.svg"
      /> */}
      <img className={styles.epeditIcon} alt="" src="/epedit.svg" />
      <img className={styles.epeditIcon1} alt="" src="/epedit.svg" />
      <img className={styles.epeditIcon2} alt="" src="/epedit.svg" />
      <div className={styles.desktop14Child1} />
      <div className={styles.keyPointsContraryContainer}>
      <p className={styles.keyPoints}>Key Points:</p>
      <ul className={styles.contraryToPopularBeliefLo}>
        {slidedataInfo.map((slide, index) => (
          <li key={index} className={styles.itHasRootsInAPieceOfCla}>
            <span>{slide.keyPoints.join(', ')}</span>
          </li>
        ))}
      </ul>
    </div>
      <div className={styles.desktop14Child2} />
      <div className={styles.emphasizedWordsContraryContainer}>
      <p className={styles.keyPoints}>Transcription:</p>
      <ul className={styles.contraryToPopularBeliefLo}>
        {slidedataInfo.map((slide, index) => (
          <li key={index} className={styles.itHasRootsInAPieceOfCla}>
            <span>{slide.transcription}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Desktop14;
