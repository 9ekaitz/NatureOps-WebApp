import React from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
/*ICONOS*/

import { FiMenu } from "react-icons/fi";


/*IMAGENES*/
import logo from "../images/logo.png";
/*import logro1 from "../images/logro_img.png";
import logro2 from "../images/logro_img2.png";
import logro3 from "../images/logro_img3.png";*/



import "../styles/styleSidebar.css"
import "../styles/styleLogros.css"

import data from "../data/logros.json";

function Logros() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }
  console.log(data);
  const DisplayData=data.map(
    (logro)=>{
      return(
        <div className="logroCard" key={logro.id}>
          <div className="logroTop">
            <img src={logro.imagen} alt="logro1" className="logroImg"/>
            <h4>{logro.nombre}</h4>
          </div>
          <p>{logro.descripcion}</p>
          <div className="progress-element">
            <div className="bar">
              <div style={{"width": logro.progresoUsuario + "%", "backgroundColor":"#48BFE3", "height":"20px"}}>
              </div>
              <div style={{"width": (logro.maximo-logro.progresoUsuario) + "%", "backgroundColor":"aliceblue", "height":"20px"}}>
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
          {DisplayData}
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