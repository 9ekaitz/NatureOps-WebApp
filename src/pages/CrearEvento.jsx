import React from "react";
import FormLugarComponente from "./componentsDashBoard/FormLugarComponent.jsx";
import FormNuevoLugarComponente from "./componentsDashBoard/FormNuevoLugarComponent.jsx";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import { useTranslation } from "react-i18next";
import Button from "../components/Button";


import "../styles/styleGeneralForms.css"

import styleCrearEvento from "../styles/crearEvento.module.css"

import lugares from "../jsons/nombresSitios.json"

function CrearEvento() {

  const { t } = useTranslation();

  return( 
    <main className="single-column">
      <div className={"forma".concat(" "+styleCrearEvento.evento)} data-testid="eventoaSortu">
        <h1>{t("CreateEvent.CreateEvent")}</h1>
        <div className="formImagen">
          <label htmlFor="fname">{t("CreateEvent.NameNewEvent")}: </label>
          <input type="text" id="fname" className="inputClass" required/>
        </div>

        <FormLugarComponente lugares={lugares} labelName={t("CreateEvent.Place").concat(":")}/>
        <FormNuevoLugarComponente labelName={t("CreateEvent.Question")} inputPlaceholder={t("CreateEvent.NameNewEvent")}/>
          
        <div className={styleCrearEvento.fechaHora}>
          <div className="formImagen">
            <label htmlFor="fFecha">{t("CreateEvent.Date")}: </label>
            <input type="date" id="fFecha" className="inputClass"/>
          </div>
          <div className="formImagen">
            <label htmlFor="fHora">{t("CreateEvent.Time")}: </label>
            <input type="time" id="fHora" className="inputClass"/>
          </div>
        </div>
        <div className="formImagen">
          <label htmlFor="fDescripcion">{t("CreateEvent.DescriptionNewEvent")}: </label>
          <textarea id="fDescripcion" className="inputClass"/>
        </div>
        <div className="panelBotones">
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--success--solid"
            icon={<FiCheck />}
          >
            {t("Buttons.Accept")}
          </Button>
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--danger--solid"
            icon={<VscChromeClose />}
          >
            {t("Buttons.Cancel")}
          </Button>
        </div>
      </div>  
    </main>    
     
  );
}

export default CrearEvento;