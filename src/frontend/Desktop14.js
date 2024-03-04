import styles from "./Desktop14.module.css";

const Desktop14 = () => {
  return (
    <div className={styles.desktop14}>
      {/* <img className={styles.loopergroupIcon} alt="" src="/loopergroup.svg" /> */}
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
        <div className={styles.aku}>
          <div className={styles.inactiveTab}>
            <div className={styles.specialOffers}>Slides</div>
          </div>
        </div>
        <div className={styles.nums}>
          <div className={styles.inactiveTab}>
            <div className={styles.specialOffers}>Transcribed</div>
          </div>
        </div>
        <div className={styles.allBundles}>
          <div className={styles.activeTab}>
            <div className={styles.specialOffers}>Key Points</div>
          </div>
        </div>
      </div>
      <div className={styles.lecture12}>Lecture 12</div>
      <div className={styles.programing}>Programing</div>
      <div className={styles.thDec2023}>20th Dec 2023</div>
      <div className={styles.desktop14Inner} />
      <b className={styles.home}>
        Home</b>
      <div className={styles.archieve}>
        Archive</div>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.startPresenting}>Start Presenting</div>
      <img
        className={styles.iconParkOutlineslide}
        alt=""
        src="/iconparkoutlineslide.svg"
      />
      <img className={styles.epeditIcon} alt="" src="/epedit.svg" />
      <img className={styles.epeditIcon1} alt="" src="/epedit.svg" />
      <img className={styles.epeditIcon2} alt="" src="/epedit.svg" />
      <div className={styles.desktop14Child1} />
      <div className={styles.keyPointsContraryContainer}>
        <p
          className={styles.keyPoints}
        >{`Key Points:                                    `}</p>
        <ul className={styles.contraryToPopularBeliefLo}>
          <li className={styles.itHasRootsInAPieceOfCla}>
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </span>
          </li>
          <li className={styles.itHasRootsInAPieceOfCla}>
            <span>
              It has roots in a piece of classical Latin literature from 45 BC
            </span>
          </li>
          <li className={styles.itHasRootsInAPieceOfCla}>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.desktop14Child2} />
      <div className={styles.emphasizedWordsContraryContainer}>
        <p className={styles.keyPoints}>Emphasized words:</p>
        <ul className={styles.contraryToPopularBeliefLo}>
          <li className={styles.itHasRootsInAPieceOfCla}>
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </span>
          </li>
          <li className={styles.itHasRootsInAPieceOfCla}>
            <span>
              It has roots in a piece of classical Latin literature from 45 BC
            </span>
          </li>
          <li className={styles.itHasRootsInAPieceOfCla}>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desktop14;
