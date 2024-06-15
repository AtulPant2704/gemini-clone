import googleLogo from "assets/googleLogo.svg";
import styles from "./styles.module.css";

const Chat = () => {
  return (
    <div className={styles.chatContainer}>
      <div id="scroll" className={styles.lastPrompt}>
        <div className={styles.questionContainer}>
          <div className={styles.userAvatar}>U</div>
          <div className={styles.question} contenteditable="false">
            Find hotels in Phuket for a week, and suggest a packing list
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
            <div className={`material-symbols-outlined ${styles.speakerIcon}`}>
              volume_up
            </div>
          </div>
        </div>
        <div className={styles.answerContainer}>
          <img
            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
            alt="loader"
            className={`${styles.bigScreenIcon}`}
          />
          <div className={`${styles.answer} ${styles.typing}`}>
            The aroma of sizzling spices mingles with the sweetness of simmering
            fruits, a symphony of scents that fills the air. In the kitchen, you
            embark on a culinary adventure, a fusion of contrasting flavors and
            techniques. Drawing inspiration from global cuisines, you combine
            tangy kimchi with creamy avocado, or smoky paprika with delicate
            rosewater. Each step is an experiment, a dance between tradition and
            innovation. As you plate your creation, a sense of accomplishment
            washes over you. You've not only satisfied your hunger but also
            created something new and delicious, a testament to the boundless
            potential of culinary exploration.
          </div>
        </div>
        <div className={styles.answerIconsContainer}>
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
    </div>
  );
};

export default Chat;
