import styles from "./styles.module.css";

const InputContainer = ({ enteredPrompt, setEnteredPrompt, submitHandler }) => {
  const promptInputHandler = (event) => {
    window.getSelection().selectAllChildren(event.target);
    window.getSelection().collapseToEnd();
    if (event.keyCode === 13) {
      event.preventDefault();
      submitHandler();
      return;
    }
    setEnteredPrompt(event.target.textContent);
  };

  return (
    <div className={styles.inputContainer}>
      <div
        className={styles.inputDiv}
        contentEditable={true}
        placeholder="Enter a prompt here"
        id="enterPrompt"
        onKeyDown={promptInputHandler}
      >
        {enteredPrompt}
      </div>
      <div className={styles.iconsDiv}>
        <div className={`material-symbols-outlined ${styles.inputIcon}`}>
          add_photo_alternate
        </div>
        <div className={`material-symbols-outlined ${styles.inputIcon}`}>
          mic
        </div>
        {enteredPrompt && (
          <div
            className={`material-symbols-outlined cursor-pointer ${styles.inputIcon}`}
            onClick={submitHandler}
          >
            send
          </div>
        )}
      </div>
    </div>
  );
};

export default InputContainer;
