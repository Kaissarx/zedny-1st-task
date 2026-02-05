import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import Loader from "../../components/common/Loader/Loader";
import useAuth from "../../hooks/useAuth";
import { isEmailValid } from "../../utils/validators";
import styles from "./Login.module.css";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isEmailValid(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (email !== "admin@admin.com" || password !== "admin1234") {
      setError("Invalid credentials.");
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      navigate("/welcome");
    } catch (err) {
      setError("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {isAuthenticated && <p>You are already logged in.</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Login"}
        </Button>
      </form>
    </section>
  );
};

export default Login;

