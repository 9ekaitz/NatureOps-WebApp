import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx" 
import InputFileComponent from "./componentsDashBoard/InputFileComponent.jsx";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import "../styles/prueba.css"

function CrearNoticia() {

  return(
    <div className="claseSubirImagen">
      <Aside/>
      <div className="eskuina">
        <div className="forma formNoticia">
          <h1>Crear noticia</h1>
          <div className="formImagen">
            <label htmlFor="fname">Titulo: </label>
            <input type="text" id="fname" name="fname" className="inputClass"/>
          </div>
          <div className="formImagen">
            <label htmlFor="fname">Autor: </label>
            <input type="text" id="fname" name="fname" className="inputClass"/>
          </div>
          <div className="formImagen">
            <label htmlFor="fname">Resumen: </label>
            <input type="text" id="resumenInput" name="fname" className="inputClass"/>
          </div>
          <InputFileComponent grande="0"/>
          <div className="formImagen url">
            <label htmlFor="fname">URL: </label>
            <input type="text" id="fname" name="fname" className="inputClass"/>
          </div>         
          <div className="panelBotones">
            <button className="accept">ACEPTAR<FiCheck/></button>             
            <button className="cancel">CANCELAR<VscChromeClose/></button>
          </div>
        </div>
                
      </div>
    </div>
  );
}

export default CrearNoticia;