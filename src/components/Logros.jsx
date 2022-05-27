import React from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
import Pagination from "./componentsDashBoard/Pagination.jsx";

/*ICONOS*/

import { FiMenu } from "react-icons/fi";


/*IMAGENES*/
import logo from "../images/logo.png";

import "../styles/styleSidebar.css"
import "../styles/styleLogros.css"


function Logros() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  return(
    <div  className="containerLogros">
      <Aside/>
      <main>
        <h1>Logros</h1>
        <Pagination itemsPerPage="9"/>
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