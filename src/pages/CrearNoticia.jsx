import React from "react";
import { useNavigate } from "react-router";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import styles from "../styles/crearNoticia.module.css"
import "../styles/styleGeneralForms.css"
import { useTranslation } from "react-i18next";
import Button from "../components/Button";


function CrearNoticia() {

  const { t } = useTranslation();

  const navigate = useNavigate();

  function changeText(){
    let input=document.getElementById("fileInput");
    let fileName=input.files[0].name;
    let span=document.getElementById("fileSpan");
    span.innerHTML=fileName;
  }
  return(
    <main data-testid="noticiaSortu" className="single-column">
      <div className={`forma ${styles.formNoticia}`}>
        <h1>{t("CreateNews.CreateNews")}</h1>
        <div className={styles.formImagen}>
          <label htmlFor="fTitulo">{t("CreateNews.Title")}: </label>
          <input type="text" id="fTitulo" className={styles.inputClass}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fAutor">{t("CreateNews.Author")}:</label>
          <input type="text" id="fAutor" className={styles.inputClass}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fResumen">{t("CreateNews.Summary")}: </label>
          <input type="text" id="resumenInput" name="fname" className={styles.inputClass}/>
        </div>
        <div className={styles.foto}>
          <span id="fileSpan">{t("CreateNews.SelectImage")}</span>
          <input type="file" id="fileInput" name="fname" onChange={changeText}/>
        </div>
        <div className={`${styles.url} ${styles.formImagen}`}>
          <label htmlFor="fUrl">URL: </label>
          <input type="text" id="fUrl" className={styles.inputClass}/>
        </div>         
        <div className="panelBotones">
          <Button
            onClick={()=>navigate("/dashboard/noticias")}
            buttonSize="btn--medium"
            buttonStyle="btn--success--solid"
            icon={<FiCheck />}
          >
            {t("Buttons.Accept")}
          </Button>
          <Button
            onClick={()=>navigate("/dasboard/noticias")}
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

export default CrearNoticia;