import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="navbar">
      <NavLink to={"/"}>Maps</NavLink>
      {!isAuthenticated ? (
        <>
          <NavLink to={"/login"}>Login</NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/nodes"}>Node</NavLink>
          <NavLink to={"/edges"}>Edge</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
