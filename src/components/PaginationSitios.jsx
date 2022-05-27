import React from "react";

import "../styles/styleSitios.css"
import data from "../data/sitios.json";
import PaginationComponent from "./componentsDashBoard/PaginationComponent.jsx";

function PaginationSitios({ itemsPerPage }) {

  const DisplayData=data.map(
    (sitio)=>{
      return(
        <div className="sitioCard" key={sitio.id}>
          <img src={sitio.imagen} alt="img1" className="imgSitios"/>
          <h4>{sitio.nombre}</h4>
          <p>{sitio.descripcion}</p>
          <p className="puntuacion"><b>PUNTUACIÓN: </b>{sitio.puntuacion}</p>
        </div>
      );
    }
  )

  return(
    <div className="listSitios">
      <PaginationComponent DisplayData={DisplayData} itemsPerPage={itemsPerPage}/>
    </div>
  );
  
}

export default PaginationSitios;