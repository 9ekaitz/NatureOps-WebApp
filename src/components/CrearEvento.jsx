import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx"  
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import "../styles/styleGeneralForms.css"

function CrearEvento() {

  return(
    <div className="claseSubirImagen" data-testid="eventoaSortu">
            
      <div className="ezkerra">
        <Aside/>
      </div>
      <div className="eskuina ">
        <div className="forma evento">
          <div className="formImagen">
            <label htmlFor="fname">Nombre: </label>
            <input type="text" id="fname" name="fname"/>
          </div>
          <div className="formLugar">
            <label htmlFor="lname">Lugar: </label>
            <select>
              <option defaultValue="lesaka">Lesaka</option>
              <option value="arrasate">Arrasate</option>
              <option value="donosti">Donostia</option>
              <option value="zarautz">Zarautz</option>
            </select>
          </div>
          <div className="formNuevoLugar">
            <div className="formCheck">
              <input type="checkbox" id="checkSitio" name="vehicle1" value="Quiero registrar un nuevo sitio"></input>
              <label htmlFor="lname"> Quiero registrar un nuevo sitio </label>
            </div>
            <input type="text" id="lname" name="lname"/>  
          </div>
          <div className="fechaHora">
            <div className="formImagen">
              <label htmlFor="fname">Fecha: </label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div className="formImagen">
              <label htmlFor="fname">Hora: </label>
              <input type="text" id="fname" name="fname"/>
            </div>
          </div>
          <div className="formImagen">
            <label htmlFor="fname">Descripcion: </label>
            <input type="text" id="fname" name="fname"/>
          </div>
          <div className="panelBotones">
            <div className="aceptar">
              <button className="accept">ACEPTAR</button>
              <span><FiCheck/></span>
            </div>
            <div className="cancelar">
              <button className="cancel">CANCELAR</button>
              <span><VscChromeClose/></span>
            </div> 
          </div>
        </div>
                
      </div>
    </div>
  );
}

export default CrearEvento;