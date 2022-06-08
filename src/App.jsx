import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Registro from "./pages/Registro.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import Overview from "./pages/Overview.jsx";
import Perfil from "./pages/Perfil.jsx";
import Logout from "./pages/Logout.jsx";
import Logros from "./components/Logros.jsx"; 
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

import "./styles/main.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Overview />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="logros" element={<Logros />} />
      </Route>
    </Routes>
  );
}
