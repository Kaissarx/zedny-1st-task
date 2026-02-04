import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <p className={styles.subtitle}>
        This is the main landing page for the Zedny 1st Task app.
      </p>
    </section>
  );
};

export default Home;

