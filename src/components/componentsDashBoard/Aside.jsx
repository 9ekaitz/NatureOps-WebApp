import React from "react";
import { ImNewspaper, ImCross} from "react-icons/im";
import { MdEvent, MdPlace } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { FiLogOut, FiMenu } from "react-icons/fi"

import logo from "../../images/logo.png"
import "../../styles/styleGeneralForms.css"

function Aside() {

  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }

  
  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  return(
    <div className="ezkerra" data-testid="asideClass">
      <aside id="asidee" className="cerrar" data-testid="asidea">
        <div className = "top">
          <div className="close" id="close-btn">
            <button data-testid="botonCerrar" onClick={cerrarNavbar}><ImCross /></button>
          </div>
          <img className="imagenLogo" src={logo} alt="Logo"/>
          <h2>NatureOps</h2>  
        </div>
        <div className="sidebar">
          <a href="https://www.google.es/">
            <span> <ImNewspaper /></span>
            <h3>News</h3>
          </a>
          <a href="https://www.google.es/">
            <span> <MdEvent /></span>
            <h3>Events</h3>
          </a>
          <a href="https://www.google.es/">
            <span> <MdPlace /></span>
            <h3>Places</h3>
          </a>
          <a href="https://www.google.es/">
            <span> <CgProfile /></span>
            <h3>Profile</h3>
          </a>
          <a className="salir" href="https://www.google.es/">
            <span> <FiLogOut /></span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      <div className="right">
        <div className="top">
          <button data-testid="botonAbrir" id="menu-btn" onClick={abrirNavbar}><span><FiMenu/></span></button>
        </div>
      </div>
    </div>  
  );
}

export default Aside;