import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "../api/axios";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({});
const LOGIN_URL = "/api/login";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (payload) => {
    const formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);
    try {
      const response = await axios.post(LOGIN_URL, formData, {
        headers: {
          "Content-type": "multipart/formdata",
        },
      });
      const accessToken = response?.data?.access_token;
      const refreshToken = response?.data?.refresh_token;
      const role = jwt_decode(accessToken).roles[0];
      const username = payload.username;
      setAuth({ username, role, accessToken, refreshToken });
      const origin = location.state?.from?.pathname || "/dashboard";
      navigate(origin);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
