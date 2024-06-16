import styles from "./styles.module.css";

const PromptCard = ({ icon, prompt, promptHandler }) => {
  return (
    <div
      className={`cursor-pointer ${styles.promptCard}`}
      onClick={() => promptHandler(prompt)}
      data-testid="prompt-card"
    >
      <div className={styles.promptText}>{prompt}</div>
      <div className={`material-symbols-outlined ${styles.promptIcon}`}>
        {icon}
      </div>
    </div>
  );
};

export default PromptCard;
