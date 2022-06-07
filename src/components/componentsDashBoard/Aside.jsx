import React from "react";
import { ImNewspaper, ImCross } from "react-icons/im";
import { MdEvent, MdPlace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import logo from "../../images/logo.png";

import styleSidebar from "../../styles/styleSidebar.module.css"


function Aside() {
  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }
  return(
    <aside id="asidee" className={styleSidebar.cerrar} data-testid="asidea">
      <div className = {styleSidebar.top}>
        <div className={styleSidebar.close} id="close-btn">
          <button data-testid="botonCerrar" onClick={cerrarNavbar}><ImCross /></button>
        </div>
        <img className={styleSidebar.imagenLogo} src={logo} alt="Logo"/>
        <h2>NatureOps</h2>  
      </div>
      <div className={styleSidebar.sidebar}>
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
        <a className={styleSidebar.salir} href="https://www.google.es/">
          <span> <FiLogOut /></span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
}

export default Aside;