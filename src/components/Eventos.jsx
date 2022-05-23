import React from "react";

/*ICONOS*/
import { ImNewspaper } from "react-icons/im";
import { MdEvent } from "react-icons/md"
import { MdPlace } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { ImCross} from "react-icons/im"
import { FiLogOut } from "react-icons/fi"
import { FiMenu } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr"
import { FaPlus } from "react-icons/fa"


import { Helmet } from "react-helmet"
/*IMAGENES*/
import logo from "../images/logo.png"
import img_playa from "../images/PlayaConcha.jpg"


import "../styles/styleSidebar.css"
import "../styles/styleEventos.css"



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
    <div className="containerEventos">
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
          <a href="/eventos">
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
      <main>
        <h1>Eventos</h1>
        <div className="eventos">
          <div className="apartado">
            <h2>Lista de eventos disponibles</h2>
            <GrCircleInformation/>
          </div>
          <div className="listaEventos">
            <div className="eventCard destacado">
              <p>Evento GreenPeace</p>
              <p>2022-05-20</p>
              <p>11:30</p>
              <p>Playa de la Concha, Donostia</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard destacado">
              <p>Evento Carton</p>
              <p>2022-05-20</p>
              <p>11:30</p>
              <p>Playa de la Concha, Donostia</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard">
              <p>Evento Papel</p>
              <p>2022-05-20</p>
              <p>11:30</p>
              <p>Playa de la Concha, Donostia</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard">
              <p>Evento Papel</p>
              <p>2022-05-20</p>
              <p>11:30</p>
              <p>Playa de la Concha, Donostia</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard">
              <p>Evento Papel</p>
              <p>2022-05-20</p>
              <p>11:30</p>
              <p>Playa de la Concha, Donostia</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>          
          </div>
          <button className="addButton"><FaPlus className="icon" size="17px"/></button>
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
      <Helmet>
       
      </Helmet>
      
      
    </div>
  );
}

export default Eventos;