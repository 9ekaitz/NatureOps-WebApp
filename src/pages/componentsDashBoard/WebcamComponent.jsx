import React,{useState,useEffect} from "react";
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa"
import {RiCameraSwitchFill} from "react-icons/ri"
import PanelBotones from "./PanelBotones.jsx";

const WebcamCapture = () => {
  const [mostrar,setMostrar]=useState(false);
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [constraints, setConstraints]=useState("user");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  useEffect(() => {
    if(imgSrc!=null){
      setMostrar(true);
    }
    mostrarTexto();
    var imgJsonString=JSON.stringify(imgSrc);
    sessionStorage.setItem("takenPhoto",imgJsonString);
  });
  
  function mostrarTexto(){
    if(mostrar==true){
      document.getElementById("divFotoID").classList.remove("oculto");
      document.getElementById("divCamaraID").classList.add("oculto");
    }else{
      document.getElementById("divFotoID").classList.add("oculto");
      document.getElementById("divCamaraID").classList.remove("oculto");
    }
  }

  function girarCamara(){
    if(constraints=="user"){
      setConstraints("environment");
    }
    else{
      setConstraints("user");
    }
  }

  return (
    <>
      <div className="divCamara" id="divCamaraID">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="camara"
          videoConstraints={constraints}
        />
        <div className="divBotones">
          <button onClick={capture} className="botonCamara"><FaCamera/></button>
          <button onClick={girarCamara} className="botonGira"><RiCameraSwitchFill/></button>
        </div>
      </div>
      <div className="divFoto oculto" id="divFotoID">
        <h2>Esta es tu foto: </h2>
        {imgSrc && (<img src={imgSrc} alt="foto" className="fotoCamara"/>)}
        <span>Quieres subir la foto?</span>
        <PanelBotones numBotones="2" cancelRuta="subirFoto" acceptRuta="subirFoto" pantallaFoto={true}/>
      </div>
    </>
  );
};
export default WebcamCapture;


