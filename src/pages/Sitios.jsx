import React from "react";
import { useTranslation } from "react-i18next";

import styleSitio from "../styles/styleSitios.module.css"
import data from "../data/sitios.json";
import PaginationComponent from "../components/componentsDashBoard/PaginationComponent.jsx";

function Sitios() {

  const { t } = useTranslation();

  const DisplayData=data.map(
    (sitio)=>{
      return(
        <div className={styleSitio.sitioCard} key={sitio.id}>
          <img src={sitio.imagen} alt="img1" className={styleSitio.imgSitios}/>
          <h4>{sitio.nombre}</h4>
          <p>{sitio.descripcion}</p>
          <p className={styleSitio.puntuacion}><b>{t("Places.Score")}</b>{sitio.puntuacion}</p>
        </div>
      );
    }
  )
  
  return(
    <main className={styleSitio.containerSitios} data-testid="container">
      <h1>{t("Places.Places")}</h1>
      <div className={styleSitio.listSitios}>
        <PaginationComponent DisplayData={DisplayData} itemsPerPage="6" stylePantalla={styleSitio}/>
      </div>
    </main>
  );
}

export default Sitios;