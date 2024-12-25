import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, role, user, logout } = useAuth();

  return (
    <div className="navbar">
      <NavLink to={"/"}>Maps</NavLink>
      {!isAuthenticated ? (
        <>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </>
      ) : (
        <>
          {/* Conditionally show admin page if the user role is "admin" */}
          {role === 'admin' && <NavLink to={'/users'}>Users</NavLink>}
          {role === 'admin' && <NavLink to={'/nodes'}>Nodes</NavLink>}
          {role === 'admin' && <NavLink to={'/edges'}>Edges</NavLink>}

          <NavLink to={"/profile"}>Profile</NavLink>
          <span>{user.username}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
