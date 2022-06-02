import React from "react";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import { FaCamera } from "react-icons/fa"
import { BsImages } from "react-icons/bs"

function PanelBotones({numBotones, cancelRuta, acceptRuta, pantallaFoto}){

  function changePage(ruta){
    location.href=ruta;
  }

  function eraseAndChange(ruta){
    sessionStorage.removeItem("takenPhoto");
    sessionStorage.removeItem("chosenPhoto");
    changePage(ruta);
  }

  if(pantallaFoto==true && numBotones==2){
    return(
      <div className="panelBotones">
        <button className="accept" onClick={()=>changePage(acceptRuta)}>ACEPTAR<FiCheck/></button>
        <button className="cancel" onClick={()=>eraseAndChange(cancelRuta)}>CANCELAR<VscChromeClose/></button>
      </div>
    ); 
  }

  if(numBotones==2 && pantallaFoto==false){
    return(
      <div className="panelBotones">
        <button className="accept largo" onClick={()=>changePage(acceptRuta)}>ACEPTAR<FiCheck/></button>
        <button className="cancel largo" onClick={()=>changePage(cancelRuta)}>CANCELAR<VscChromeClose/></button>
      </div>
    );

  }else if(numBotones==3){
    return(
      <div className="panelBotones botonesEvento">
        <button className="accept">APUNTATE!!<FiCheck/></button>
        <button className="photos" onClick={()=>eraseAndChange("/subirFoto")}>Añadir imagenes<FaCamera/></button>
        <button className="gallery">Ver imagenes<BsImages/></button>
      </div>
    );
  }

}
export default PanelBotones;