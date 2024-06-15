import styles from "./styles.module.css";

const InputContainer = () => {
  return (
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
  );
};

export default InputContainer;
