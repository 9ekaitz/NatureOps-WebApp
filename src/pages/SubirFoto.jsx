import React, { useState} from "react";
import FormLugarComponente from "../pages/componentsDashBoard/FormLugarComponent.jsx";
import FormNuevoLugarComponente from "../pages/componentsDashBoard/FormNuevoLugarComponent.jsx";
import Button from "../components/Button";


import { BsCamera } from "react-icons/bs"
import { MdUploadFile } from "react-icons/md"
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"



import "../styles/styleGeneralForms.css"
import style from "../styles/subirFoto.module.css"

import lugares from "../jsons/nombresSitios.json"

function SubirFotoPrueba() {

  let [chosen,setChosen]=useState(null);
  const { t } = useTranslation();

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
    <main className={style.seleccionarImagenContainer} data-testid="subirImagen">
      <div className={style.seleccionarImagen} data-testid="subirImagen">
        <h1>{t("UploadImage.AddImage")}</h1>
        <div className={style.añadirImagen}>
          <h2>{t("UploadImage.Options")}: </h2>
          <div className={style.divOpciones}>
            <div className={style.subir}>
              <span id="fileSpan"><MdUploadFile className={style.iconGrande}/>{t("UploadImage.UploadImage")}</span>
              <input type="file" id="fileInput" onChange={changeHandler} accepts="image/*" className="inputFile"/>
            </div>
            <button className={style.sacarFoto} onClick={()=>eraseAndChange("/camara")}><BsCamera className={style.iconGrande}/>{t("UploadImage.TakePhoto")}</button>
          </div>

          <div className={style.detallesDeFoto}>
            <h2>{t("UploadImage.Details")}: </h2>
            <FormLugarComponente lugares={lugares} labelName={t("CreateEvent.PlaceNewEvent")}/>
            <FormNuevoLugarComponente labelName={t("CreateEvent.Question")} inputPlaceholder={t("CreateEvent.NameNewEvent")}/>
            <div >
              <label htmlFor="tamaño">{t("UploadImage.Size")}: </label>
              <input type="text" id="tamaño" className={style.inputClass}/>
            </div>        
          </div>
          <div className={style.fotoElegida}>
            <h2>{t("UploadImage.ChosenImage")}: </h2>
            {object && <img src={object} alt="taken" id="takenIMG" className={style.imgPreview}></img>}
            {chosen && <img src={chosen} alt="chosen" id="chosenIMG" className={style.imgPreview}></img>}
          </div>
          <div className={style.buttons}>
            <Button
              onClick={()=>changePage("evento")}
              buttonSize="btn--medium"
              buttonStyle="btn--success--solid"
              icon={<FiCheck />}
            >
              {t("Buttons.Accept")}
            </Button>
            <Button
              onClick={()=>eraseAndChange("evento")}
              buttonSize="btn--medium"
              buttonStyle="btn--danger--solid"
              icon={<VscChromeClose />}
            >
              {t("Buttons.Cancel")}
            </Button>
          </div>
        </div>
      </div>
    </main>

  );
}

export default SubirFotoPrueba;