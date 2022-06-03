import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Registro from "./components/Registro.jsx";
import DashBoard from "./components/Dashboard.jsx"; 
import SubirFoto from "./components/SubirFoto.jsx"
import CrearNoticia from "./components/CrearNoticia.jsx"
import CrearEvento from "./components/CrearEvento.jsx"
import Evento from "./components/Evento.jsx"
import Noticias from "./components/Noticias.jsx"
import Foto from "./components/SacarFoto.jsx"


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/noticias" element={<Noticias />}/>
        <Route exact path="/subirFoto" element={<SubirFoto/>}/>
        <Route exact path="/crearNoticia" element={<CrearNoticia/>}/>
        <Route exact path="/crearEvento" element={<CrearEvento/>}/>
        <Route exact path="/evento" element={<Evento/>}/>
        <Route exact path="/noticias" element={<Noticias/>}/>
        <Route exact path="/camara" element={<Foto/>}/>
      </Routes>
    </BrowserRouter>
  );
}
