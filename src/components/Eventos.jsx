import React from "react";

import { FiMenu } from "react-icons/fi"
import { FaPlus } from "react-icons/fa"

import logo from "../images/logo.png"

import Aside from "./componentsDashBoard/Aside.jsx"
import PaginationComponent from "./componentsDashBoard/PaginationComponent.jsx";


import styleSidebar from "../styles/styleSidebar.module.css"
import styleEventos from "../styles/styleEventos.module.css"

import data from "../data/eventos.json";


function Eventos() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  const DisplayData=[];
  let DisplayDataItem={};

  for(let i=0;i<data.length;i++){
    let fecha=data[i].fecha;
    let fechaHora=fecha.split(" ");
    DisplayDataItem=
      <div className={data[i].destacado? (styleEventos.eventCard.concat(" "+styleEventos.destacado)): styleEventos.eventCard }>
        <p>{data[i].nombre}</p>
        <p>{fechaHora[0]}</p>
        <p>{fechaHora[1]}</p>
        <p>{data[i].lugar}</p>
        <div className={styleEventos.imagenCard}>
          <img src={data[i].foto} alt="playa1"></img>
        </div>
        <button className={styleEventos.buttonDetalles}>Detalles</button>
      </div>
    DisplayData[i]=DisplayDataItem;
  }

  return(
    <div className={styleEventos.containerEventos} data-testid="containerEventos">
      <Aside/>
      <main>
        <h1>Eventos</h1>
        <div className={styleEventos.eventos}>
          <div className={styleSidebar.apartado}>
            <h2>Lista de eventos disponibles</h2>
          </div>
          <div className={styleEventos.listaEventos}>
            <PaginationComponent DisplayData={DisplayData} itemsPerPage="8"/>         
          </div>
          <button className={styleEventos.addButton}><FaPlus className={styleEventos.icon} size="17px"/></button>
        </div>
      </main>
      <div className={styleSidebar.right}>
        <div className={styleSidebar.top}>
          <button id="menu-btn" data-testid="botonAbrir" onClick={abrirNavbar}><span><FiMenu/></span></button>
          <div className={styleSidebar.profile}>
            <div className={styleSidebar.info}>
              <p>Hey, <b>Daniel</b> </p>
              <small className={styleSidebar.textmuted}>Admin</small>
            </div>
            <div className={styleSidebar.profilePhoto}>
              <img src={logo} alt="perfil"/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Eventos;