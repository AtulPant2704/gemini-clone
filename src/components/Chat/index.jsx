import { useEffect, useRef, useState } from "react";

import Loader from "components/Loader";

import googleLogo from "assets/googleLogo.svg";
import styles from "./styles.module.css";

const Chat = ({ response }) => {
  const [loading, setLoading] = useState(false);
  const lastElementRef = useRef(null);

  const getAnswer = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getAnswer();
  }, []);

  useEffect(() => {
    lastElementRef?.current?.scrollIntoView();
    getAnswer();
  }, [response]);

  return (
    <div className={styles.chatContainer}>
      {response.map(({ prompt, answer }, index) => (
        <div
          key={index}
          ref={index === response.length - 1 ? lastElementRef : null}
          className={index === response.length - 1 && styles.lastPrompt}
        >
          <div className={styles.questionContainer}>
            <div className={styles.userAvatar}>U</div>
            <div className={styles.question} contentEditable="false">
              {prompt}
            </div>
          </div>
          <div className={styles.draftsAndIconContainer}>
            <div className={styles.showDraftsContainer}>
              <div className={styles.showDrafts}>
                Show drafts
                <div
                  className={`material-symbols-outlined ${styles.showDraftsIcon}`}
                >
                  expand_more
                </div>
              </div>
              <div
                className={`material-symbols-outlined ${styles.speakerIcon}`}
              >
                volume_up
              </div>
            </div>
          </div>
          <div className={styles.answerContainer}>
            <img
              src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
              alt="loader"
              className={`${styles.bigScreenIcon} ${loading && styles.rotate}`}
            />
            {loading ? (
              <Loader />
            ) : (
              <div className={`${styles.answer} ${styles.typing}`}>
                {answer}
              </div>
            )}
          </div>
          <div
            className={`${styles.answerIconsContainer} ${
              index === response.length - 1 && styles.lastAnswer
            }`}
          >
            <div className={`material-symbols-outlined ${styles.likeIcon}`}>
              thumb_up
            </div>
            <div className={`material-symbols-outlined ${styles.likeIcon}`}>
              thumb_down
            </div>
            <div className={`material-symbols-outlined ${styles.answerIcon}`}>
              tune
            </div>
            <div className={`material-symbols-outlined ${styles.answerIcon}`}>
              share
            </div>
            <img
              className={styles.answerIcon}
              src={googleLogo}
              alt="G"
              height="20px"
            ></img>
            <div className={`material-symbols-outlined ${styles.answerIcon}`}>
              more_vert
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
