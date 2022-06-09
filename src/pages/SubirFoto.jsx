import React, { useState} from "react";
import FormLugarComponente from "../pages/componentsDashBoard/FormLugarComponent.jsx";
import FormNuevoLugarComponente from "../pages/componentsDashBoard/FormNuevoLugarComponent.jsx";
import PanelBotones from "../pages/componentsDashBoard/PanelBotones.jsx";

import { BsCamera } from "react-icons/bs"
import { MdUploadFile } from "react-icons/md"


import "../styles/styleGeneralForms.css"
import style from "../styles/subirFoto.module.css"

import lugares from "../jsons/nombresSitios.json"

function SubirFotoPrueba() {

  let [chosen,setChosen]=useState(null);

  function changePage(ruta){
    location.href=ruta;
  }

  function eraseAndChange(ruta){
    sessionStorage.removeItem("takenPhoto");
    sessionStorage.removeItem("chosenPhoto");
    changePage(ruta);
  }

  const changeHandler = (e) => {
    sessionStorage.removeItem("takenPhoto");
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => setChosen(event.target.result);
    if(file!=null)fileReader.readAsDataURL(file);
  }

  var imagenJsonString=sessionStorage.getItem("takenPhoto");
  var object=JSON.parse(imagenJsonString);

  return(
    <div className={style.claseSubirImagen}>    
      <div className={style.seleccionarImagen} data-testid="subirImagen">
        <h1>Añadir imagen</h1>
        <div className={style.añadirImagen}>
          <h2>Opciones: </h2>
          <div className={style.divOpciones}>
            <div className={style.subir}>
              <span id="fileSpan"><MdUploadFile className={style.iconGrande}/>Subir imagen</span>
              <input type="file" id="fileInput" onChange={changeHandler} accepts="image/*" className="inputFile"/>
            </div>
            <button className="sacarFoto" onClick={()=>eraseAndChange("/camara")}><BsCamera className={style.iconGrande}/>Sacar foto</button>
          </div>

          <div className={style.detallesDeFoto}>
            <h2>Detalles de la foto:</h2>
            <FormLugarComponente lugares={lugares} labelName="Lugares: "/>
            <FormNuevoLugarComponente/>
            <div >
              <label htmlFor="ubicacion">Tamaño: </label>
              <input type="text" className={style.inputClass} disabled/>
            </div>        
          </div>
          <div className={style.fotoElegida}>
            <h2>Foto elegida: </h2>
            {object && <img src={object} alt="taken" id="takenIMG" className={style.imgPreview}></img>}
            {chosen && <img src={chosen} alt="chosen" id="chosenIMG" className={style.imgPreview}></img>}
          </div>
          <PanelBotones numBotones="2" cancelRuta="/evento" acceptRuta="/evento" pantallaFoto={false}/>
        </div>
      </div>
    </div>
  );
}

export default SubirFotoPrueba;