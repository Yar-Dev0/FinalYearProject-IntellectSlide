import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Desktop12.module.css";

const Desktop12 = () => {
  const navigate = useNavigate();

  const onComponent5ContainerClick = useCallback(() => {
    navigate("/slides");
  }, [navigate]); 

  const onArchieveTextClick = useCallback(() => {
    navigate("/archive");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.desktop12}>
      <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" />
      <img className={styles.looperBgIcon} alt="" src="/looper-bg.svg" />
      <div className={styles.desktop12Child} />
      <div className={styles.component1}>
        <b className={styles.intellect}>
          <p className={styles.smd}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.smd}>Slide</p>
        </div>
      </div>
      <div className={styles.component2}>
        <b className={styles.intellect}>
          <p className={styles.smd}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.smd}>Slide</p>
        </div>
      </div>
      <div className={styles.logout}>Logout</div>
      <div className={styles.searchbar}>
        <div className={styles.content}>
          <div className={styles.magnifyingglass}>
            <div className={styles.magnifyingglass1}></div>
          </div>
          <div className={styles.placeholderLabel}>Search</div>
        </div>
      </div>
      {/* <div className={styles.startTourButton}>
        <div className={styles.startTourButtonChild} />
        <div className={styles.save}>Save</div>
      </div> */}
      <div className={styles.searchbar1}>
        <div className={styles.content}>
          <div className={styles.magnifyingglass2}>
            {/* <div className={styles.magnifyingglass1}>􀊫</div> */}
          </div>
          <div className={styles.placeholderLabel1}><input
            type="text"
            placeholder="Search"
            className={styles.placeholderLabel1} 
/>
</div>
        </div>
      </div>
      <select className={styles.placeholderLabel2}>
  <option value="" disabled selected hidden>
  {`Sort by `}
  </option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
      <div className={styles.component21} onClick={onComponent5ContainerClick}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 12</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>SMD</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-8@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div>
      <div className={styles.component6}onClick={onComponent5ContainerClick}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 06</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>Discrete Mathematics</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-81@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div>
      <div className={styles.component4}onClick={onComponent5ContainerClick}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 12</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>Dev ops</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-81@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div>
      <div className={styles.component7}onClick={onComponent5ContainerClick}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 09</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>OOP</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-82@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div>
      {/* <div className={styles.component3}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 15</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>PDC</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-83@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div> */}
      {/* <div className={styles.component8}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 02</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>SMD</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-8@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div> */}
      <div className={styles.component5} onClick={onComponent5ContainerClick}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 01</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>Web Dev</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-82@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div>
      <div className={styles.component9} onClick={onComponent5ContainerClick}>
        <div className={styles.component2Child} />
        <b className={styles.lecture12}>Lecture 07</b>
        <div className={styles.smdSectionAContainer}>
          <p className={styles.smd}>Theory of Automata</p>
          <p className={styles.smd}>&nbsp;</p>
          <p className={styles.smd}>15th March 2023</p>
        </div>
        <img
          className={styles.component2Item}
          alt=""
          src="/rectangle-83@2x.png"
        />
        <div className={styles.component2Inner} />
        <div className={styles.view}>View</div>
      </div>
      <img
        className={styles.mingcutedownFillIcon}
        alt=""
        src="/mingcutedownfill.svg"
      />
      <div className={styles.desktop12Item} />
      <b className={styles.home} onClick={onHomeTextClick}>Home</b>
      <div className={styles.archieve} onClick={onArchieveTextClick}>
        Archive
      </div>
      <div className={styles.aboutUs}>About Us</div>

    </div>
  );
};

export default Desktop12;