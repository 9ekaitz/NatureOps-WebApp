import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import LandingPage  from "./components/LandingPage.jsx";
import Registro from "./components/Registro.jsx";
import DashBoard from "./components/Dashboard.jsx"; 
import Logros from "./components/Logros.jsx"; 

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/logros" element={<Logros />}/>
      </Routes>
    </BrowserRouter>
  );
}

