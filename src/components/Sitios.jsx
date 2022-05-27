import React from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
import PaginationSitios from "./PaginationSitios.jsx";
/*ICONOS*/

import { FiMenu } from "react-icons/fi";
import {FaPlus} from "react-icons/fa";

/*IMAGENES*/
import logo from "../images/logo.png";

/*ESTILO*/
import "../styles/styleSidebar.css"
import "../styles/styleSitios.css"

/*DATOS*/


function Sitios() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }
  
  return(
    <div className="container">
      <Aside/>
      <main>
        <h1>Sitios</h1>
        <PaginationSitios itemsPerPage="6"/>
        <button className="buttonAdd"><FaPlus size="18px" color="white"/></button>
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

export default Sitios;