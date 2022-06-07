import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Registro from "./pages/Registro.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import Overview from "./pages/Overview.jsx";
import Perfil from "./pages/Perfil.jsx";
import Logout from "./pages/Logout.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import SubirFoto from "./pages/SubirFoto.jsx"
import CrearNoticia from "./pages/CrearNoticia.jsx"
import CrearEvento from "./pages/CrearEvento.jsx"
import Evento from "./pages/Evento.jsx"
import Noticias from "./pages/Noticias.jsx"
import Foto from "./pages/SacarFoto.jsx"

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
        <Route path="noticias" element={<Noticias />}/>
        <Route path="subirFoto" element={<SubirFoto/>}/>
        <Route path="crearNoticia" element={<CrearNoticia/>}/>
        <Route path="crearEvento" element={<CrearEvento/>}/>
        <Route path="evento" element={<Evento/>}/>
        <Route path="noticias" element={<Noticias/>}/>
        <Route path="camara" element={<Foto/>}/>
      </Route>
    </Routes>
  );
}
