import React, { createContext } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "../api/axios";
import jwt_decode from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext({});
const LOGIN_URL = "/api/login";

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
  const [userData, setUserData] = useLocalStorage("user_data", {});

  const auth = {
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
    userData,
    setUserData,
  };

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
      auth.setAccessToken(response?.data?.access_token);
      auth.setRefreshToken(response?.data?.refresh_token);

      const role = jwt_decode(response?.data?.access_token).roles[0];

      auth.setUserData((prev) => {
        return { ...prev, username: payload.username, role: role };
      });

      const origin = location.state?.from?.pathname || "/dashboard";
      navigate(origin);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const cleanFields = () => {
    auth.setAccessToken(null);
    auth.setRefreshToken(null);
    auth.setUserData(null);
  };

  const handleLogout = () => {
    cleanFields();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ auth, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
