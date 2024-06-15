import { useState } from "react";

import Sidebar from "components/Sidebar";
import PromptCard from "components/PromptCard";

import { SAMPLE_PROMPTS } from "utils/constants";
import styles from "./styles.module.css";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className={styles.homePage}>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
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
          <div>
            <div className={styles.userAvatar}>U</div>
          </div>
        </header>
        <section className={styles.middleContainer}>
          <div className={styles.welcomeContainer}>
            <div className={styles.helloContainer}>
              <div className={styles.helloText}>Hello, User</div>
              <div className={styles.helpText}>How can I help you today?</div>
            </div>

            <div className={styles.promptCardsContainer}>
              {SAMPLE_PROMPTS.map(({ icon, text }, index) => (
                <PromptCard key={index} icon={icon} text={text} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.bottomContainer}>
          <div className={styles.inputContainer}>
            <div
              className={styles.inputDiv}
              contentEditable={true}
              placeholder="Enter a prompt here"
              id="enterPrompt"
            ></div>
            <div className={styles.iconsDiv}>
              <div className={`material-symbols-outlined ${styles.inputIcon}`}>
                add_photo_alternate
              </div>
              <div className={`material-symbols-outlined ${styles.inputIcon}`}>
                mic
              </div>
            </div>
          </div>
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
