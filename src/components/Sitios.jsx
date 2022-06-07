import React from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
/*ICONOS*/

import { FiMenu } from "react-icons/fi";
import {FaPlus} from "react-icons/fa";

/*IMAGENES*/
import logo from "../images/logo.png";

/*ESTILO*/
import styleSidebar from "../styles/styleSidebar.module.css"
import styleSitio from "../styles/styleSitios.module.css"

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
        <div className={styleSitio.sitioCard} key={sitio.id}>
          <img src={sitio.imagen} alt="img1" className={styleSitio.imgSitios}/>
          <h4>{sitio.nombre}</h4>
          <p>{sitio.descripcion}</p>
          <p className={styleSitio.puntuacion}><b>PUNTUACIÓN: </b>{sitio.puntuacion}</p>
        </div>
      );
    }
  )
  
  return(
    <div className={styleSidebar.container} data-testid="container">
      <Aside/>
      <main>
        <h1>Sitios</h1>
        <div className={styleSitio.listSitios}>
          <PaginationComponent DisplayData={DisplayData} itemsPerPage="6"/>
        </div>
        <button className={styleSitio.buttonAdd}><FaPlus size="18px" color="white"/></button>
      </main>
      <div className={styleSidebar.right}>
        <div className={styleSidebar.top}>
          <button id="menu-btn" data-testid="botonAbrir" onClick={abrirNavbar}><span><FiMenu/></span></button>
          <div className="profile">
            <div className="info">
              <p>Hey, <b>Daniel</b> </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className={styleSidebar.profilePhoto}>
              <img src={logo} alt="perfil"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitios;