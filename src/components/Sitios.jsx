import React from "react";
/*, { useState }*/
/*import Aside from "./componentsDashBoard/Aside.jsx";*/
/*ICONOS*/
import { ImNewspaper } from "react-icons/im";
import { MdEvent } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ImCross} from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import {FaPlus} from "react-icons/fa";

/*IMAGENES*/
import logo from "../images/logo.png";
import playa from "../images/playa.jpg";

import "../styles/styleSidebar.css"
import "../styles/styleSitios.css"



function Sitios() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }

  return(
    <div className="container">
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
      <main>
        <h1>Sitios</h1>
        <div className="listSitios">
          <div className="sitioCard">
            <img src={playa} alt="noticia1" className="imgSitios"/>
            <h4>Playa de la Concha</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <p>9.8</p>
          </div>
          <div className="sitioCard">
            <img src={playa} alt="noticia2" className="imgSitios"/>
            <h4>Playa Zurriola</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <p>8.4</p>
          </div>
          <div className="sitioCard">
            <img src={playa} alt="noticia2" className="imgSitios"/>
            <h4>Playa Santiago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <p>5.5</p>
          </div>
          <div className="sitioCard">
            <img src={playa} alt="noticia2" className="imgSitios"/>
            <h4>Playa Santiago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <p>5.5</p>
          </div>
        </div>
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