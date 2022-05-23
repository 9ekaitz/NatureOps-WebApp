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


/*IMAGENES*/
import logo from "../images/logo.png";
import logro1 from "../images/logro_img.png";
import logro2 from "../images/logro_img2.png";
import logro3 from "../images/logro_img3.png";

/*import scriptReact from "../JavaScript/index.js"*/


import "../styles/styleSidebar.css"
import "../styles/styleLogros.css"



function Logros() {
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
    <div  className="containerLogros">
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
          <a className="salir" href="https://www.google.es/">
            <span> <FiLogOut /></span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      <main>
        <h1>Logros</h1>
        <div className="listLogros">
          <div className="logroCard">
            <div className="logroTop">
              <img src={logro1} alt="logro1" className="logroImg"/>
              <h4>Nombre logro</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <div className="progress-element">
              <span>Progreso: </span>
              <div className="progress-container" id="p1">
                <progress value="5" max="10">50%</progress>
              </div>
            </div>
          </div>
          <div className="logroCard">
            <div className="logroTop">
              <img src={logro2} alt="logro2" className="logroImg"/>
              <h4>Nombre logro</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <div className="progress-element">
              <span>Progreso: </span>
              <div className="progress-container" id="p1">
                <progress value="5" max="10">50%</progress>
              </div>
            </div>
          </div>
          <div className="logroCard">
            <div className="logroTop">
              <img src={logro3} alt="logro3" className="logroImg"/>
              <h4>Nombre logro</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <div className="progress-element">
              <span>Progreso: </span>
              <div className="progress-container" id="p1">
                <progress value="5" max="10">50%</progress>
              </div>
            </div>
          </div>
          <div className="logroCard">
            <div className="logroTop">
              <img src={logro2} alt="logro2" className="logroImg"/>
              <h4>Nombre logro</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <div className="progress-element">
              <span>Progreso: </span>
              <div className="progress-container" id="p1">
                <progress value="5" max="10">50%</progress>
              </div>
            </div>
          </div>
          <div className="logroCard">
            <div className="logroTop">
              <img src={logro3} alt="logro3" className="logroImg"/>
              <h4>Nombre logro</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <div className="progress-element">
              <span>Progreso: </span>
              <div className="progress-container" id="p1">
                <progress value="5" max="10">50%</progress>
              </div>
            </div>
          </div>
          <div className="logroCard">
            <div className="logroTop">
              <img src={logro1} alt="logro1" className="logroImg"/>
              <h4>Nombre logro</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sunt numquam quidem, 
            impedit quis ipsa fugit excepturi alias voluptatibus ratione.
            </p>
            <div className="progress-element">
              <span>Progreso: </span>
              <div className="progress-container" id="p1">
                <progress value="5" max="10">50%</progress>
              </div>
            </div>
          </div>
        </div>
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