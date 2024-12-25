import React, { useEffect, useState } from "react";

import { usePost } from "../../hooks";
import { baseurl } from "../../config/urls";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  const { loading, handlePost } = usePost();
  const [formData, setFormData] = useState({});

  const { login } = useAuth();

  // handle login function
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await handlePost(`${baseurl}/auth/login`, formData);

      if (res && res.token) {
        alert("Logged in successfully");

        formData.email = "";
        formData.password = "";
        
        const user = {
          role: res.role,
          username: res.username,
          email: res.email,
        }
        login(res.token, user);
      } else {
        alert("No token returned");
      }
    } catch (error) {
      alert("Error creating admin");
      console.log("error", error);
    }
  };
  return (
    <div className="auth-container">
      <div className="header">
        <h2>Login</h2>
      </div>
      <div className="box">
        <form method="post" onSubmit={handleLogin}>
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

          <button type="submit" disabled={loading ? true : false}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
