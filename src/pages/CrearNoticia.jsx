import React from "react";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import styles from "../styles/crearNoticia.module.css"
import "../styles/styleGeneralForms.css"
import { useTranslation } from "react-i18next";


function CrearNoticia() {

  const { t } = useTranslation();

  function changeText(){
    let input=document.getElementById("fileInput");
    let fileName=input.files[0].name;
    let span=document.getElementById("fileSpan");
    span.innerHTML=fileName;
  }
  return(
    <main data-testid="noticiaSortu" className={styles.noticiaSortu}>
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
          <button className="accept">{t("Buttons.Accept")}<FiCheck/></button>             
          <button className="cancel">{t("Buttons.Cancel")}<VscChromeClose/></button>
        </div>
      </div>
                
    </main>
  );
}

export default CrearNoticia;