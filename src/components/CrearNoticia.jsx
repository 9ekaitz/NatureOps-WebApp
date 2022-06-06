import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx" 
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import "../styles/styleGeneralForms.css"
import "../styles/crearNoticia.css"

function CrearNoticia() {

  function changeText(){
    let input=document.getElementById("fileInput");
    let fileName=input.files[0].name;
    let span=document.getElementById("fileSpan");
    span.innerHTML=fileName;
  }
  return(
    <div className="claseSubirImagen" data-testid="noticiaSortu">
      <Aside/>
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
        <div className="foto">
          <span id="fileSpan">Seleccionar Imagen</span>
          <input type="file" id="fileInput" name="fname" onChange={changeText}/>
        </div>
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
  );
}

export default CrearNoticia;