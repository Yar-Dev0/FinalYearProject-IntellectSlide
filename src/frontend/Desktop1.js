import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLOGINTextClick = useCallback(() => {
    // You might want to handle login logic here
    navigate("/desktop-11");
  }, [navigate]);

  const handleRegisterClick = () => {
    // Logic to handle navigation to the registration page
    navigate("/registration"); // Replace "/registration" with the actual route for registration
  };


  return (
    <div className={styles.desktop1}>
      <img className={styles.desktop1Child} alt="" src="/group-1.svg" />
      <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" />
      <div className={styles.transformingLecturesEngageContainer}>
        <p className={styles.transformingLectures}>Transforming Lectures</p>
        <p className={styles.transformingLectures}>Engage, Navigate, Transcribe!</p>
      </div>
      <img className={styles.looperBgIcon} alt="" src="/looper-bg.svg" />
      <div className={styles.component1}>
        <b className={styles.intellect}>
          <p className={styles.transformingLectures}>Intellect</p>
        </b>
        <div className={styles.slide}>
          <p className={styles.transformingLectures}>Slide</p>
        </div>
      </div>
      <img className={styles.logincardIcon} alt="" src="/logincard.svg" />
      <div className={styles.card} />
      <div className={styles.card1} />
      <div className={styles.card2} />
      <div className={styles.login} onClick={onLOGINTextClick}>
        LOGIN
      </div>
      <div className={styles.login1}>Login</div>
      <div className={styles.welcomeOnboardWith}>Welcome onboard with us!</div>
      <div className={styles.username}>Username</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.enterYourUsername}
      />
      <div className={styles.password}>Password</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.enterYourPassword}
      />
       <div className={styles.newRegisterHere}>
        New? <span onClick={handleRegisterClick} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Register Here</span>
      </div>
      <div className={styles.desktop1Item} />
    </div>
  );
};

export default Desktop1;
