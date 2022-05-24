import React from "react";
import { ImNewspaper, ImCross } from "react-icons/im";
import { MdEvent, MdPlace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import logo from "../../images/logo.png";

function Aside() {
  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }
  return(
    <aside id="asidee" className="cerrar">
      <div className = "top">
        <div className="close" id="close-btn">
          <button onClick={cerrarNavbar}><ImCross /></button>
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
        <a href="/sitios">
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
  );
}

export default Aside;