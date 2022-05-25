import React from "react";
import NoticiasJson from "../jsons/noticias.json"

import { ImNewspaper, ImCross } from "react-icons/im";
import { MdEvent, MdPlace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiMenu } from "react-icons/fi";

/*IMAGENES*/
import logo from "../images/logo.png";
import "../styles/styleSidebar.css"



function Noticias() {

  const cargarImagen = require.context("../images", true);
  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }

  return(
    <div className="container noticiasGeneral">
      <aside id="asidee" className="cerrar">
        <div className = "top">
          <div className="close" id="close-btn">
            <button onClick={cerrarNavbar}><ImCross /></button>
          </div>
          <img className="imagenLogo" src={logo} alt="Logo"/>
          <h2>NatureOps</h2>  
        </div>
        <div className="sidebar">
          <a className="news" href="https://www.google.es/">
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
      <main>
        <h1>Noticias</h1>
        <div className="noticias">
          {NoticiasJson.map(record=>{
            return(
              <div className="card" key={record.id}>
                <img src={cargarImagen(`./${record.imagen}`)} alt={record.id}/>
                <h4>{record.titulo}</h4>
                <p>{record.descripcion}</p>
                <a href={record.URL}>Leer más</a> 
              </div>
            )
          })
          }
        </div>
      </main>
      <div className="right">
        <div className="top">
          <button id="menu-btn" onClick={abrirNavbar}><span><FiMenu/></span></button>
        </div>
      </div>
    </div>
  );
}

export default Noticias;