import React from "react";

/*ICONOS*/
import { FiMenu } from "react-icons/fi"
import { FaPlus } from "react-icons/fa"

/*IMAGENES*/
import logo from "../images/logo.png"
import img_playa from "../images/PlayaConcha.jpg"

import Aside from "./componentsDashBoard/Aside.jsx"


import "../styles/styleSidebar.css"
import "../styles/styleEventos.css"
import data from "../data/eventos.json";


function Eventos() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

 

  const DisplayData=data.map(
    (evento)=>{
      return(
        <div className="eventCard destacado" key={evento.id}>
          <p>{evento.nombre}</p>
          <p>{evento.fecha}</p>
          <p>11:30</p>
          <p>{evento.lugar}</p>
          <div className="imagenCard">
            <img src={img_playa} alt="playa1"></img>
          </div>
          <button className="buttonDetalles">Detalles</button>
        </div>
              
      );
    } 
  )
  

  return(
    <div className="containerEventos">
      <Aside/>
      <main>
        <h1>Eventos</h1>
        <div className="eventos">
          <div className="apartado">
            <h2>Lista de eventos disponibles</h2>
          </div>
          <div className="listaEventos">
            {DisplayData}
            <div className="eventCard destacado">
              <p>Evento Carton</p>
              <p>2022-02-12</p>
              <p>12:30</p>
              <p>Playa de Zurriola, Donostia</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa2"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard">
              <p>Evento Papel</p>
              <p>2022-07-23</p>
              <p>15:30</p>
              <p>Playa de Santiago, Deba</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa3"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard">
              <p>Evento Plastico</p>
              <p>2022-04-20</p>
              <p>17:30</p>
              <p>Playa de Getaria, Getaria</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa4"></img>
              </div>
              <button className="buttonDetalles">Detalles</button>
            </div>
            <div className="eventCard">
              <p>Evento Beluga</p>
              <p>2022-08-24</p>
              <p>18:30</p>
              <p>Playa Grande, Zarautz</p>
              <div className="imagenCard">
                <img src={img_playa} alt="playa5"></img>
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
    </div>
  );
}

export default Eventos;