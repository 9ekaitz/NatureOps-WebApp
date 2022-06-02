import React, {useEffect, useState} from "react";
import Eventos from "../jsons/eventos.json"
import Galeria from "../jsons/galeria.json"

import { ImNewspaper, ImCross } from "react-icons/im";
import { MdEvent, MdPlace } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";


//import useAxiosPrivate from "../hooks/useAxiosPrivate";

/*IMAGENES*/
import logo from "../images/logo.png";
import "../styles/styleSidebar.css"
import axios from "../api/axios";
//import cargarImagen from "../images"





function DashBoard() {
  //const axiosPrivate = useAxiosPrivate();
  let noticias = [];
  const [news, setNews] = useState([]);


  /*
  *
  const cargarImagen = require.context("../images", true);
  <img src={cargarImagen(`./${record.imagen}`)} alt={record.id}/>
  <img src={cargarImagen(`./${record.imagen}`)} alt={record.id}/>
  *
  */
 
  const fetchData = async () =>{
    const response = await axios.get("/api/news/0/3"
    );
    noticias = response?.data;
    setNews(noticias)
  }

  
    

  useEffect(() =>{
    noticias = null;
    fetchData();
  },[])

  
  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  function cerrarNavbar(){

    document.getElementById("asidee").classList.remove("abrir");
    document.getElementById("asidee").classList.add("cerrar");
  }


  return(
    <div className="container" data-testid="dashboarda">
      <aside id="asidee" className="cerrar" data-testid="asidea">
        <div className = "top">
          <div className="close" id="close-btn">
            <button data-testid="botonCerrar" onClick={cerrarNavbar}><ImCross /></button>
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
        <h1>Dashboard</h1>
        <div className="noticias">
          {news.map(record=>{
            return(
              <div className="card" key={record.id}>  
                <h4>{record.title}</h4>
                <p>{record.subtitle}</p>
                <a href={record.URL}>Leer más</a> 
              </div>
            )
          })
          }
          
        </div>
        <div className="eventos">
          <div className="apartado">
            <h2>Eventos</h2>
            <GrCircleInformation/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Lugar</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Eventos.map(record=>{
                return(
                  <tr key={record.id}>
                    <td>{record.nombre}</td>
                    <td>{record.lugar}</td>
                    <td>{record.fecha}</td>
                    <td>{record.hora}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </main>
      <div className="right">
        <div className="top">
          <button id="menu-btn" data-testid="botonAbrir" onClick={abrirNavbar}><span><FiMenu/></span></button>
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
            <h2>Galeria</h2>
            <GrCircleInformation/>
          </div>
          {Galeria.map(record=>{
            return(
              <div className="imagen" key={record.id}>
                
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default DashBoard;