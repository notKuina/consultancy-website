import { createContext, useState } from "react";
import React from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("access_token");
    const username = localStorage.getItem("username");

    return token ? { username, token } : null;
  });

  const login = (username, token) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("username", username);
    setUser({ username, token });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
