import React from "react";

/*ICONOS*/
import { FiMenu } from "react-icons/fi"
import { FaPlus } from "react-icons/fa"

/*IMAGENES*/
import logo from "../images/logo.png"

import Aside from "./componentsDashBoard/Aside.jsx"
import PaginationComponent from "./componentsDashBoard/PaginationComponent.jsx";


import "../styles/styleSidebar.css"
import "../styles/styleEventos.css"
import data from "../data/eventos.json";


function Eventos() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  const DisplayData=[];
  let DisplayDataItem={};

  for(let i=0;i<data.length;i++){
    if(data[i].destacado==1){
      DisplayDataItem=
        <div className="eventCard destacado">
          <p>{data[i].nombre}</p>
          <p>{data[i].fecha}</p>
          <p>11:30</p>
          <p>{data[i].lugar}</p>
          <div className="imagenCard">
            <img src={data[i].foto} alt="playa1"></img>
          </div>
          <button className="buttonDetalles">Detalles</button>
        </div>
                  
          
    }else{
      DisplayDataItem=
        <div className="eventCard">
          <p>{data[i].nombre}</p>
          <p>{data[i].fecha}</p>
          <p>11:30</p>
          <p>{data[i].lugar}</p>
          <div className="imagenCard">
            <img src={data[i].foto} alt="playa1"></img>
          </div>
          <button className="buttonDetalles">Detalles</button>
        </div>
                  
          
    }

    DisplayData[i]=DisplayDataItem;
  }

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
            <PaginationComponent DisplayData={DisplayData} itemsPerPage="8"/>         
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