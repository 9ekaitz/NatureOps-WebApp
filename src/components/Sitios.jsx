import React from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
/*ICONOS*/

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

  return(
    <div className="container">
      <Aside/>
      <main>
        <h1>Sitios</h1>
        <div className="listSitios">
          <div className="sitioCard">
            <img src={playa} alt="noticia1" className="imgSitios"/>
            <h4>Playa de la Concha</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus rationePDLC.
            </p>
            <p>9.8</p>
          </div>
          <div className="sitioCard">
            <img src={playa} alt="noticia2" className="imgSitios"/>
            <h4>Playa Zurriola</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.PZ
            </p>
            <p>8.4</p>
          </div>
          <div className="sitioCard">
            <img src={playa} alt="noticia2" className="imgSitios"/>
            <h4>Playa Santiago</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.PS
            </p>
            <p>5.5</p>
          </div>
          <div className="sitioCard">
            <img src={playa} alt="noticia2" className="imgSitios"/>
            <h4>Playa de Antilla</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.PDA
            </p>
            <p>5.7</p>
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