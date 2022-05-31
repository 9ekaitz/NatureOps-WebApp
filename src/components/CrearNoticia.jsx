import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx" 
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import "../styles/styleGeneralForms.css"

function CrearNoticia() {

  return(
    <div className="claseSubirImagen" data-testid="noticiaSortu">
      <Aside/>
      <div className="eskuina">
        <div className="forma noticia">
          <div className="formImagen">
            <label htmlFor="fname">Titulo: </label>
            <input type="text" id="fname" name="fname"/>
          </div>
          <div className="formImagen">
            <label htmlFor="fname">Autor: </label>
            <input type="text" id="fname" name="fname"/>
          </div>
          <div className="formImagen">
            <label htmlFor="fname">URL: </label>
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

export default CrearNoticia;