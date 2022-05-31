import React from "react";
import Aside from "./componentsDashBoard/Aside.jsx" 
import { FiCheck } from "react-icons/fi"
import { BsChat } from "react-icons/bs"
import { IoMdSend } from "react-icons/io"
import "../styles/styleGeneralForms.css"

function Evento() {

  return(
    <div className="claseSubirImagen claseEvento" data-testid="eventoa">
      <Aside/>
      <div className="eskuina">
        <div className="forma noticia">
          <div className="tituloEvento">
            <h1>NOMBRE DEL EVENTO</h1>
            <p>El evento consiste en limpiar la playa de... Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sunt quia asperiores perspiciatis harum pariatur minus, ipsa eaque, aliquam unde, quod maiores. 
                        Quas iste doloremque incidunt dignissimos, minima amet recusandae tempora?</p>
          </div>

          <h2>Playa Laida</h2>
          <h2>13/06/2022</h2>
          <h2>10:30</h2>
          <div className="panelBotones">
            <div className="aceptar">
              <button className="accept">APUNTATE!!</button>
              <span><FiCheck/></span>
            </div>
          </div>
        </div>
                
      </div>
      <div className="chat">
        <div className="topChat">
          <button id="chat-btn"><span><BsChat/></span></button>
          <h1>CHAT</h1>      
        </div>
        <div className="conver">

        </div>
        <div className="formEscribirMsg">
          <input type="text" id="fname" name="fname"/>
          <span><IoMdSend/></span>
        </div>
      </div>
    </div>
  );
}

export default Evento;