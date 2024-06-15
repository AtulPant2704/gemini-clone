import styles from "./styles.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingContainer}>
        <div
          className={`${styles.loadingBar} ${styles.gradient1} ${styles.animateLoading}`}
        ></div>
        <div
          className={`${styles.loadingBar} ${styles.gradient2} ${styles.animateLoading}`}
        ></div>
        <div
          className={`${styles.loadingBar} ${styles.gradient3} ${styles.animateLoading}`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
