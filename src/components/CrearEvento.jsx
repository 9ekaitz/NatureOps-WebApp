import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx"  
import { MdUploadFile } from "react-icons/md"
import { BsCamera } from "react-icons/bs"
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import "../style/styleGeneralForms.css"

function CrearEvento() {

    return(
        <div className="claseSubirImagen">
            
            <div className="ezkerra">
                <Aside/>
            </div>
            <div className="eskuina ">
                <div className="forma evento">
                    <div className="formImagen">
                        <label for="fname">Nombre: </label>
                        <input type="text" id="fname" name="fname"/>
                    </div>
                    <div className="formLugar">
                        <label for="lname">Lugar: </label>
                        <select>
                            <option selected value="lesaka">Lesaka</option>
                            <option value="arrasate">Arrasate</option>
                            <option value="donosti">Donostia</option>
                            <option value="zarautz">Zarautz</option>
                        </select>
                    </div>
                    <div className="formNuevoLugar">
                        <div className="formCheck">
                            <input type="checkbox" id="checkSitio" name="vehicle1" value="Quiero registrar un nuevo sitio"></input>
                            <label for="lname"> Quiero registrar un nuevo sitio </label>
                        </div>
                        <input type="text" id="lname" name="lname"/>  
                    </div>
                    <div className="fechaHora">
                        <div className="formImagen">
                            <label for="fname">Fecha: </label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className="formImagen">
                            <label for="fname">Hora: </label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className="formImagen">
                            <label for="fname">Descripcion: </label>
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