import PromptCard from "components/PromptCard";

import { SAMPLE_PROMPTS } from "utils/constants";
import styles from "./styles.module.css";

const Welcome = ({ setEnteredPrompt }) => {
  const promptHandler = (prompt) => {
    setEnteredPrompt(prompt);
  };

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.helloContainer}>
        <div className={styles.helloText}>Hello, User</div>
        <div className={styles.helpText}>How can I help you today?</div>
      </div>

      <div className={styles.promptCardsContainer}>
        {SAMPLE_PROMPTS.map(({ icon, prompt }, index) => (
          <PromptCard
            key={index}
            icon={icon}
            prompt={prompt}
            promptHandler={promptHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
