import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import useAuth from "../../../hooks/useAuth";
import useTheme from "../../../hooks/useTheme";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Zedny 1st Task</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <button
          type="button"
          onClick={toggleTheme}
          className={styles.themeToggle}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
        {isAuthenticated && (
          <>
            <span className={styles.user}>Hi, {user?.email}</span>
            <button
              type="button"
              onClick={logout}
              className={styles.logoutButton}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

