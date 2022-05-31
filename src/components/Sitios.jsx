import React from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
/*ICONOS*/

import { FiMenu } from "react-icons/fi";
import {FaPlus} from "react-icons/fa";

/*IMAGENES*/
import logo from "../images/logo.png";

/*ESTILO*/
import "../styles/styleSidebar.css"
import "../styles/styleSitios.css"

/*DATOS*/
import data from "../data/sitios.json";
import PaginationComponent from "./componentsDashBoard/PaginationComponent.jsx";

function Sitios() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  const DisplayData=data.map(
    (sitio)=>{
      return(
        <div className="sitioCard" key={sitio.id}>
          <img src={sitio.imagen} alt="img1" className="imgSitios"/>
          <h4>{sitio.nombre}</h4>
          <p>{sitio.descripcion}</p>
          <p className="puntuacion"><b>PUNTUACIÓN: </b>{sitio.puntuacion}</p>
        </div>
      );
    }
  )
  
  return(
    <div className="container" data-testid="container">
      <Aside/>
      <main>
        <h1>Sitios</h1>
        <div className="listSitios">
          <PaginationComponent DisplayData={DisplayData} itemsPerPage="6"/>
        </div>
        <button className="buttonAdd"><FaPlus size="18px" color="white"/></button>
      </main>
      <div className="right">
        <div className="top">
          <button id="menu-btn" data-testid="botonAbrir" onClick={abrirNavbar}><span><FiMenu/></span></button>
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

export default Sitios;