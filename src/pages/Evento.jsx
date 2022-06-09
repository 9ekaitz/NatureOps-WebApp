import React from "react";
import { FiCheck } from "react-icons/fi"
//import { VscChromeClose } from "react-icons/vsc"
import { FaCamera } from "react-icons/fa"
import { BsImages } from "react-icons/bs"
import styles from "../styles/evento.module.css"
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

import data from "../jsons/evento.json"

function Evento() {

  let fechaHora=data.fecha.split(" ");
  const { t } = useTranslation();

  function changePage(ruta){
    location.href=ruta;
  }

  function eraseAndChange(ruta){
    sessionStorage.removeItem("takenPhoto");
    sessionStorage.removeItem("chosenPhoto");
    changePage(ruta);
  }

  return(
    <div className={styles.claseSubirImagen} data-testid="eventoa">
      <div className={styles.infoEvento}>
        <div className={styles.tituloEvento}>
          <h1>{data.nombre}</h1>
          <p>{data.descripcion}</p>
        </div>
        <div className={styles.detalles}>
          <h4>{t("CreateEvent.Place").concat(":")}{data.lugar}</h4>
          <h4>{t("CreateEvent.Date").concat(":")}{fechaHora[0]}</h4>
          <h4>{t("CreateEvent.Time").concat(":")}{fechaHora[1]}</h4>
        </div>
        <img src={data.imagen} alt="img" />
        <div className={`panelBotones ${styles.botonesEvento}`}>
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--success--solid"
            icon={<FiCheck />}
          >
            {t("Buttons.Subscribe")}
          </Button>
          <Button
            onClick={()=>eraseAndChange("subirFoto")}
            buttonSize="btn--medium"
            buttonStyle="btn--primary--solid"
            icon={<FaCamera />}
          >
            {t("Buttons.AddImages")}
          </Button>
          <Button
            onClick={()=>eraseAndChange("subirFoto")}
            buttonSize="btn--medium"
            buttonStyle="btn--primary--solid"
            icon={<BsImages />}
          >
            {t("Buttons.Gallery")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Evento;