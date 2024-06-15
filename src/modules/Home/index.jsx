import { useEffect, useState } from "react";

import Sidebar from "components/Sidebar";

import styles from "./styles.module.css";
import Chat from "components/Chat";
import Welcome from "components/Welcome";
import InputContainer from "components/InputContainer";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatPage, setIsChatPage] = useState(false);
  const [enteredPrompt, setEnteredPrompt] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");

  const submitHandler = () => {
    setFinalPrompt(enteredPrompt);
    setIsChatPage(true);
  };

  useEffect(() => {
    setEnteredPrompt("");
  }, [isChatPage]);

  return (
    <main className={styles.homePage}>
      <Sidebar
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setIsChatPage={setIsChatPage}
      />
      <section className={styles.homeContainer}>
        <header className={styles.header}>
          <div className={styles.menuAndGeminiContainer}>
            <div
              className={`material-icons ${styles.headerIcon} ${styles.menuIcon}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              menu
            </div>
            <div className={styles.geminiDropdown}>
              Gemini
              <div className={`material-icons ${styles.headerIcon}`}>
                arrow_drop_down
              </div>
            </div>
          </div>
          <div className={styles.newChatAndUserLogo}>
            <div
              className={`material-symbols-outlined cursor-pointer ${styles.newChatIcon}`}
              onClick={() => setIsChatPage(false)}
            >
              add
            </div>
            <div className={`material-symbols-outlined  ${styles.historyIcon}`}>
              more_vert
            </div>
            <div className={styles.userAvatar}>U</div>
          </div>
        </header>
        <section className={styles.middleContainer}>
          {isChatPage ? (
            <Chat prompt={finalPrompt} />
          ) : (
            <Welcome setEnteredPrompt={setEnteredPrompt} />
          )}
        </section>
        <section className={styles.bottomContainer}>
          <InputContainer
            enteredPrompt={enteredPrompt}
            setEnteredPrompt={setEnteredPrompt}
            submitHandler={submitHandler}
          />
          <div className={styles.disclaimer}>
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <span className={styles.privacyText}>
              Your privacy and Gemini Apps
            </span>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
