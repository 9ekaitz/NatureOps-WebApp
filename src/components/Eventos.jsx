import React from "react";

/*ICONOS*/
import { ImNewspaper } from "react-icons/im";
import { MdEvent } from "react-icons/md"
import { MdPlace } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { ImCross} from "react-icons/im"
import { FiLogOut } from "react-icons/fi"
import { FiMenu } from "react-icons/fi"
import {FaStar} from "react-icons/fa"
import { GrCircleInformation } from "react-icons/gr"

import { Helmet } from "react-helmet"
/*IMAGENES*/
import logo from "../Imagenes/logo.png"
import img_playa from "../Imagenes/PlayaConchaArtedo.jpg"


import "../style/styleSidebar.css"
import "../style/styleEventos.css"



function Eventos() {
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
          <a className="salir" href="https://www.google.es/">
            <span> <FiLogOut /></span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      <main>
        <h1>Eventos</h1>
        <div className="eventos">
          <div className="apartado">
            <h2>Eventos</h2>
            <GrCircleInformation/>
          </div>
          <div className="eventCard destacado">
            <FaStar className="estrella"/>
            <p>Evento GreenPeace</p>
            <p>2022-05-20</p>
            <p>11:30</p>
            <p>Playa de la Concha, Donostia</p>
            <div className="imagen">
              <img src={img_playa} alt="basura"></img>
            </div>
            <button>Detalles</button>
          </div>
          <div className="eventCard">
            <p>Evento Carton</p>
            <p>2022-05-20</p>
            <p>11:30</p>
            <p>Playa de la Concha, Donostia</p>
            <div className="imagen">
              <img src={img_playa} alt="basura"></img>
            </div>
            <button>Detalles</button>
          </div>
          <div className="eventCard">
            <p>Evento Papel</p>
            <p>2022-05-20</p>
            <p>11:30</p>
            <p>Playa de la Concha, Donostia</p>
            <div className="imagen">
              <img src={img_playa} alt="basura"></img>
            </div>
            <button>Detalles</button>
          </div>
        </div>
      </main>
      
      <Helmet>
       
      </Helmet>
      
      
    </div>
  );
}

export default Eventos;