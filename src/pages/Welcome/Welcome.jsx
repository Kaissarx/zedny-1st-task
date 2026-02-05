import React from "react";
import styles from "./Welcome.module.css";
import useAuth from "../../hooks/useAuth";

const Welcome = () => {
  const { user } = useAuth();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Welcome</h2>
      <p className={styles.subtitle}>
        Hello {user?.email || "Admin"}, you have successfully logged in.
      </p>
    </section>
  );
};

export default Welcome;

