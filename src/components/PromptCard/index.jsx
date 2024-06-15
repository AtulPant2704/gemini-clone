import styles from "./styles.module.css";

const PromptCard = ({ icon, text }) => {
  return (
    <div className={`cursor-pointer ${styles.promptCard}`}>
      <div className={styles.promptText}>{text}</div>
      <div className={`material-symbols-outlined ${styles.promptIcon}`}>
        {icon}
      </div>
    </div>
  );
};

export default PromptCard;
