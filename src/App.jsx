import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Registro from "./pages/Registro.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import Overview from "./pages/Overview.jsx";
import Perfil from "./pages/Perfil.jsx";
import "./styles/main.css"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="" element={<Overview />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
