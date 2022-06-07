import React from "react";
import WebcamCapture from "./componentsDashBoard/WebcamComponent.jsx";
import "../styles/camara.css"

function SacarFoto(){
  return(
    <main className="mainPantallaCamara">
      <h1>Sacar foto</h1>
      <WebcamCapture/>
    </main>
  );
}
export default SacarFoto;