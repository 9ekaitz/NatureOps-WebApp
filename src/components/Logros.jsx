import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx";
import PaginationComponent from "./componentsDashBoard/PaginationComponent.jsx";

import { FiMenu } from "react-icons/fi";

import logo from "../images/logo.png";
import logro1 from "../images/logro_img.png";

import "../styles/styleSidebar.css";
import "../styles/styleLogros.css";
import "../styles/pagination.css";

import data from "../data/logros.json";

function Logros() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  const DisplayData=data.map(
    (logro)=>{
      return(
        <div className="logroCard" key={logro.id}>
          <div className="logroTop">
            <img src={logro1} alt="logro1" className="logroImg"/>
            <h4>{logro.nombre}</h4>
          </div>
          <p>{logro.descripcion}</p>
          <div className="progress-element">
            <div className="bar">
              <div style={{"width": logro.progresoUsuario + "%", "backgroundColor":"#48BFE3", "height":"20px", "borderRadius":"2px"}}>
              </div>
              <div style={{"width": (logro.maximo-logro.progresoUsuario) + "%", "backgroundColor":"aliceblue", "height":"20px", "borderRadius":"2px"}}>
              </div>
            </div>
          </div>
        </div>
                
      );
    }
  )

  return(
    <div  className="containerLogros">
      <Aside/>
      <main>
        <h1>Logros</h1>
        <div className="listLogros">
          <PaginationComponent DisplayData={DisplayData} itemsPerPage="9"/>
        </div>
      </main>
      <div className="right">
        <div className="top">
          <button id="menu-btn" onClick={abrirNavbar}><span><FiMenu/></span></button>
          <div className="profile">
            <div className="info">
              <p>Hey, <b>Daniel</b> </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src={logo} alt="perfil"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logros;