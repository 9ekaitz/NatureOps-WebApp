import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx"  
import { MdUploadFile } from "react-icons/md"
import { BsCamera } from "react-icons/bs"
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import "../styles/styleGeneralForms.css"

function SubirImagen() {

  return(
    <div className="claseSubirImagen" data-testid="subirImagen">
            
      <div className="ezkerra">
        <Aside/>
      </div>
      <div className="eskuina">
        <div className="seleccionarImagen">
          <div className="subir">
            <span><MdUploadFile/></span>
            <button className="subirImagen">SUBIR IMAGEN</button>
                        
          </div>
          <div className="sacar">
            <span><BsCamera/></span>
            <button className="sacarFoto">SACAR FOTO</button>
          </div> 
        </div>
        <div className="forma">
          <input type="file"/>
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
            <input type="text" id="lname" name="lname" />  
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

export default SubirImagen;