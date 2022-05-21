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
import { GrCircleInformation } from "react-icons/gr";
import { FaPen } from "react-icons/fa";
import{FaTrashAlt} from "react-icons/fa";


/*IMAGENES*/
import logo from "../images/logo.png";
import logro from "../images/logro_img.png";
import logro2 from "../images/logro_img2.png";
import logro3 from "../images/logro_img3.png";
import logroNoConseguido from "../images/logroNoConseguido.png";
import playa from "../images/playa.jpg";

/*import scriptReact from "../JavaScript/index.js"*/


import "../styles/styleSidebar.css"
import "../styles/stylePerfil.css"



function Perfil() {
  //const sideMenu = document.querySelector("aside");
  //const closeBtn = document.querySelector("close-btn");
  
  //const closeBtn = document.getElementById("close-btn");

  //const {toggle, setToggle} = useState(true);

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }

  /*closeBtn.addEventListener("click", () => {
    console.log("Cerrar botoia");
    sideMenu.classList.remove("irekia");
    sideMenu.classList.add("itxia");
  })*/

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
          <a href="https://www.google.es/">
            <span> <MdPlace /></span>
            <h3>Places</h3>
          </a>
          <a href="https://www.google.es/">
            <span> <CgProfile /></span>
            <h3>Profile</h3>
          </a>
          <a className="salir" href="/login">
            <span> <FiLogOut /></span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      <main className="containerPerfil">
        <img className="imagenCentro" src={logo} alt="Logo"/>
        <div className="datosUsuario">
          <div className="datosBody">
            <h2>oihanee</h2>
            <div className="datos">
              <div className="col">
                <p>Oihane</p>
                <p>662263406</p>
                <p>Trenbidearen Zumardia 7, 1I</p>
              </div>
              <div className="col">
                <p>Epelde Martiarena</p>
                <p>oihane800@gmail.com</p>
                <p>20720</p>
              </div>
            </div>
            <button className="editButton">Editar<FaPen className="icon"/></button>
          </div>
        </div>
        <div className="logros">
          <div className="apartado">
            <h2>Logros obtenidos</h2>
            <a href="https://www.google.com">Ver todos</a>
          </div>
          <div className="listLogros">
            <img className="logroImg" src={logro} alt="Logro"/>
            <img className="logroImg" src={logro2} alt="Logro"/>
            <img className="logroImg" src={logro3} alt="Logro"/>
            <img className="logroImg" src={logro} alt="Logro"/>
            <img className="logroImg" src={logro2} alt="Logro"/>
            <img className="logroImg" src={logroNoConseguido} alt="Logro"/>
            <img className="logroImg" src={logroNoConseguido} alt="Logro"/>
          </div>
        </div>
        <button className="deleteButton">Eliminar cuenta<FaTrashAlt className="icon"/></button>
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
        <div className="galeria">
          <div className="apartado">
            <h2>Recientes</h2>
            <GrCircleInformation/>
          </div>
          <div className="listRecientes">
            <div className="recientesCard">
              <span>Te has suscrito a</span>
              <div className="cardBody">
                <p>Evento GreenPeace</p>
                <p>2022-05-22</p>
                <img src={playa} alt="playa"/>
              </div>
            </div>
            <div className="recientesCard">
              <span>Te has desuscrito de</span>
              <div className="cardBody">
                <p>Evento Carton</p>
                <p>2022-05-22</p>
                <img src={playa} alt="playa"/>
              </div>
            </div>
            <div className="recientesCard">
              <span>Has creado</span>
              <div className="cardBody">
                <p>Evento Papel</p>
                <p>2022-05-28</p>
                <img src={playa} alt="playa"/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Perfil;