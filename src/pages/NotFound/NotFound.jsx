import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>404 - Page Not Found</h2>
      <p className={styles.subtitle}>
        The page you are looking for does not exist.
      </p>
    </section>
  );
};

export default NotFound;

