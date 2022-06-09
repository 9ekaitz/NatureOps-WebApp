import React from "react";
import WebcamCapture from "../pages/componentsDashBoard/WebcamComponent.jsx";
import style from "../styles/camara.module.css"

function SacarFoto(){
  return(
    <div className={style.mainPantallaCamara}>
      <div className={style.camaraContainer}>
        <h1>Sacar foto</h1>
        <WebcamCapture/>
      </div>
    </div>
  );
}
export default SacarFoto;