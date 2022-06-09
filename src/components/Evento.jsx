import React from "react";
import PanelBotones from "../pages/componentsDashBoard/PanelBotones.jsx";

import styles from "../styles/evento.module.css"

import data from "../jsons/evento.json"

function Evento() {

  let fechaHora=data.fecha.split(" ");

  return(
    <div className={styles.claseSubirImagen} data-testid="eventoa">
      <div className={styles.infoEvento}>
        <div className={styles.tituloEvento}>
          <h1>{data.nombre}</h1>
          <p>{data.descripcion}</p>
        </div>
        <div className={styles.detalles}>
          <h4>Lugar: {data.lugar}</h4>
          <h4>Fecha: {fechaHora[0]}</h4>
          <h4>Hora: {fechaHora[1]}</h4>
        </div>
        <img src={data.imagen} alt="img" />
        <PanelBotones numBotones="3"/>
      </div>
    </div>
  );
}

export default Evento;