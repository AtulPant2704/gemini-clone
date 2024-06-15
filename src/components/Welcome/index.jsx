import PromptCard from "components/PromptCard";

import { SAMPLE_PROMPTS } from "utils/constants";
import styles from "./styles.module.css";

const Welcome = () => {
  return (
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
  );
};

export default Welcome;
