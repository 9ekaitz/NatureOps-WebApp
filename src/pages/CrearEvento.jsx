import React from "react";
import FormLugarComponente from "./componentsDashBoard/FormLugarComponent.jsx";
import FormNuevoLugarComponente from "./componentsDashBoard/FormNuevoLugarComponent.jsx";
import { FiCheck } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

import "../styles/styleGeneralForms.css";
import "../styles/crearEvento.css";

import lugares from "../jsons/nombresSitios.json";

function CrearEvento() {
  return (
    <main className="forma evento" data-testid="eventoaSortu">
      <h1>Crear evento</h1>
      <div className="formImagen">
        <label htmlFor="fname">Nombre: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="inputClass"
          required
        />
      </div>

      <FormLugarComponente lugares={lugares} labelName="Lugar: " />
      <FormNuevoLugarComponente />

      <div className="fechaHora">
        <div className="formImagen">
          <label htmlFor="fname">Fecha: </label>
          <input type="date" id="fname" name="fname" className="inputClass" />
        </div>
        <div className="formImagen">
          <label htmlFor="fname">Hora: </label>
          <input type="time" id="fname" name="fname" className="inputClass" />
        </div>
      </div>
      <div className="formImagen">
        <label htmlFor="fname">Descripcion: </label>
        <textarea id="fname" name="fname" className="inputClass" />
      </div>
      <div className="panelBotones">
        <button className="accept">
          ACEPTAR
          <FiCheck />
        </button>
        <button className="cancel">
          CANCELAR
          <VscChromeClose />
        </button>
      </div>
    </main>
  );
}

export default CrearEvento;
