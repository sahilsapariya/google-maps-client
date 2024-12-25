import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken(token);
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setRole(user.role);
    setUser({
      username: user.username,
      email: user.email
    })
    navigate("/");
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setRole(null);
    navigate("/login");
  };
  const validateToken = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const isTokenExpired = payload.exp * 1000 < Date.now();

    if (isTokenExpired) {
      logout(); 
    } else {
      setIsAuthenticated(true);
      setRole(payload.role); // Set role from token payload
    }
  };

  // Provide authentication state and functions to children components
  const value = {
    isAuthenticated,
    role,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
