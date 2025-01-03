import React, { useState } from "react";

import { usePost } from "../../hooks";
import { baseurl } from "../../config/urls";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { loading, handlePost } = usePost();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    role: "user",
  });

  // handle register function to create a new admin
  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await handlePost(`${baseurl}/auth/register`, formData);

      if (res && res.token) {
        alert("User created successfully");

        formData.username = "";
        formData.email = "";
        formData.password = "";
        formData.confirmPassword = "";

        login(res.token, {
          ...formData.username,
          ...formData.email,
          ...formData.role,
        });
      } else {
        alert("No token returned");
      }
    } catch (error) {
      alert("Error creating user");
      console.log("error", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="header">
        <h2>Register</h2>
      </div>
      <div className="box">
        <form method="post" onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  username: e.target.value,
                })
              }
              value={formData.username}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              value={formData.email}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              value={formData.password}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              value={formData.confirmPassword}
            />
          </div>

          <button type="submit" disabled={loading ? true : false}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
