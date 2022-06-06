import React from "react";
import WebcamCapture from "./componentsDashBoard/WebcamComponent.jsx";
import Aside from "./componentsDashBoard/Aside.jsx";
import "../styles/camara.css"

function SacarFoto(){
  return(
    <main className="mainPantallaCamara">
      <Aside/>
      <div className="camaraContainer">
        <h1>Sacar foto</h1>
        <WebcamCapture/>
      </div>
    </main>
  );
}
export default SacarFoto;