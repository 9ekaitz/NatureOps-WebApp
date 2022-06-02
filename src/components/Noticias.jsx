import React from "react";
import NoticiasJson from "../jsons/noticias.json"




/*IMAGENES*/

import "../styles/styleSidebar.css"
import Aside from "./componentsDashBoard/Aside.jsx" 
import PaginationComponent from "./componentsDashBoard/PaginationComponent.jsx";

function Noticias() {

  const cargarImagenNoti = require.context("../images", true);
  const DisplayNoticias = NoticiasJson.map(record=>{
    return(
      <div className="card" key={record.id} itemsPerPage="8">
        <img src={cargarImagenNoti(`./${record.imagen}`)} alt={record.id}/>
        <h4>{record.titulo}</h4>
        <p>{record.descripcion}</p>
        <a href={record.URL}>Leer más</a> 
      </div>
    )
  });
  return(
    <div className="container noticiasGeneral">
      <Aside/>
      <main>
        <h1>Noticias</h1>
        <div className="noticias">
          <PaginationComponent DisplayData={DisplayNoticias} itemsPerPage="8"/>
        </div>
      </main>
    </div>
  );
}

export default Noticias;