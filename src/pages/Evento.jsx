import React from "react";
import PanelBotones from "./componentsDashBoard/PanelBotones.jsx";

import "../styles/styleGeneralForms.css";
import "../styles/evento.css";

import data from "../jsons/evento.json";

function Evento() {
  let fechaHora = data.fecha.split(" ");

  return (
    <main className="infoEvento">
      <div className="tituloEvento">
        <h1>{data.nombre}</h1>
        <p>{data.descripcion}</p>
      </div>
      <div className="detalles">
        <h4>Lugar: {data.lugar}</h4>
        <h4>Fecha: {fechaHora[0]}</h4>
        <h4>Hora: {fechaHora[1]}</h4>
      </div>
      <img src={data.imagen} alt="img" />
      <PanelBotones numBotones="3" />
    </main>
  );
}

export default Evento;
