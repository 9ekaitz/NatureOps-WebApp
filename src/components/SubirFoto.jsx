import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx"  
import FormLugarComponente from "./componentsDashBoard/FormLugarComponent.jsx";
import FormNuevoLugarComponente from "./componentsDashBoard/FormNuevoLugarComponent.jsx";
import InputFileComponent from "./componentsDashBoard/InputFileComponent.jsx";
import PanelBotones from "./componentsDashBoard/PanelBotones.jsx";

import { BsCamera } from "react-icons/bs"

import "../styles/prueba.css"

import lugares from "../jsons/nombresSitios.json"

function SubirFotoPrueba() {

  function changePage(ruta){
    location.href=ruta;
  }

  function eraseAndChange(ruta){
    sessionStorage.removeItem("takenPhoto");
    sessionStorage.removeItem("chosenPhoto");
    changePage(ruta);
  }

  var chosenJsonString=sessionStorage.getItem("chosenPhoto");
  var chosen=JSON.parse(chosenJsonString);
  var imagenJsonString=sessionStorage.getItem("takenPhoto");
  var object=JSON.parse(imagenJsonString);

  return(
    <div className="claseSubirImagen">    
      <div className="ezkerra">
        <Aside/>
      </div>
      <div className="eskuina">
        <div className="seleccionarImagen">
          <h1>Añadir imagen</h1>
          <div className="añadirImagen">
            <h2>Opciones: </h2>
            <InputFileComponent grande="1"/>
            <div className="divSacar">
              <button className="sacarFoto" onClick={()=>eraseAndChange("/camara")}><BsCamera/>Sacar foto</button>
            </div> 
            <div className="detallesDeFoto">
              <h2>Detalles de la foto:</h2>
              <FormLugarComponente lugares={lugares} labelName="Lugares: "/>
              <FormNuevoLugarComponente/>        
            </div>
            <div className="fotoElegida">
              <h2>Foto elegida: </h2>
              {object && <img src={object} alt="taken" id="takenIMG"></img>}
              {chosen && <img src={chosen} alt="chosen" id="chosenIMG"></img>}
            </div>
            <PanelBotones numBotones="2" cancelRuta="/evento" acceptRuta="/evento" pantallaFoto={false}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubirFotoPrueba;