import React from "react";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import styles from "../styles/crearNoticia.module.css"

function CrearNoticia() {

  function changeText(){
    let input=document.getElementById("fileInput");
    let fileName=input.files[0].name;
    let span=document.getElementById("fileSpan");
    span.innerHTML=fileName;
  }
  return(
    <div data-testid="noticiaSortu">
      <div className={`${styles.forma} ${styles.formaNoticia}`}>
        <h1>Crear noticia</h1>
        <div className={styles.formImagen}>
          <label htmlFor="fname">Titulo: </label>
          <input type="text" id="fname" name="fname" className={styles.inputClass}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fname">Autor: </label>
          <input type="text" id="fname" name="fname" className={styles.inputClass}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fname">Resumen: </label>
          <input type="text" id="resumenInput" name="fname" className={styles.inputClass}/>
        </div>
        <div className={styles.foto}>
          <span id="fileSpan">Seleccionar Imagen</span>
          <input type="file" id="fileInput" name="fname" onChange={changeText}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fname">URL: </label>
          <input type="text" id="fname" name="fname" className={styles.inputClass}/>
        </div>         
        <div className="panelBotones">
          <button className={styles.accept}>ACEPTAR<FiCheck/></button>             
          <button className={styles.cancel}>CANCELAR<VscChromeClose/></button>
        </div>
      </div>
                
    </div>
  );
}

export default CrearNoticia;