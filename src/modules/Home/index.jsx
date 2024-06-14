import Sidebar from "components/Sidebar";

import styles from "./styles.module.css";

const Home = () => {
  return (
    <section className={styles.homePage}>
      <Sidebar />
      <section className={styles.homeContainer}></section>
    </section>
  );
};

export default Home;
