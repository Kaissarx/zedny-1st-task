import React from "react";
import { createContext, useState } from "react";
// import { loginRequest } from "../services/auth.service"; // Ready for real API

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Replace this mock with a real API call using loginRequest when backend is available
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

