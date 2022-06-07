import React from "react";
import { FaPlus } from "react-icons/fa"
import { useTranslation } from "react-i18next";

import PaginationComponent from "../components/componentsDashBoard/PaginationComponent.jsx";

import styleEventos from "../styles/styleEventos.module.css"

import data from "../data/eventos.json";


function Eventos() {
  const { t } = useTranslation();

  const DisplayData=[];
  let DisplayDataItem={};

  for(let i=0;i<data.length;i++){
    let fecha=data[i].fecha;
    let fechaHora=fecha.split(" ");
    DisplayDataItem=
      <div className={data[i].destacado? (styleEventos.eventCard.concat(" "+styleEventos.destacado)): styleEventos.eventCard }>
        <p>{data[i].nombre}</p>
        <p>{fechaHora[0]}</p>
        <p>{fechaHora[1]}</p>
        <p>{data[i].lugar}</p>
        <div className={styleEventos.imagenCard}>
          <img src={data[i].foto} alt="playa1"></img>
        </div>
        <button className={styleEventos.buttonDetalles}>{t("Events.More")}</button>
      </div>
    DisplayData[i]=DisplayDataItem;
  }

  return(
    <div className={styleEventos.containerEventos} data-testid="containerEventos">
      <h1>{t("Events.Events")}</h1>
      <div className={styleEventos.eventos}>
        <h2>{t("Events.List")}</h2>
        <div className={styleEventos.listaEventos}>
          <PaginationComponent DisplayData={DisplayData} itemsPerPage="8" stylePantalla={styleEventos}/>         
        </div>
        <button className={styleEventos.addButton}><FaPlus className={styleEventos.icon} size="17px"/></button>
      </div>
    </div>
  );
}

export default Eventos;