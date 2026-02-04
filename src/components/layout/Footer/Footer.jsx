import React from "react";
import styles from "./Footer.module.css";
import footerImage from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={footerImage} alt="Footer" className={styles.image} />
      <p className={styles.text}>
        &copy; 2026 Mohamed AbdelRazek. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

