import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";


import { FaCamera } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import {RiCameraSwitchFill} from "react-icons/ri"


import style from "../styles/camara.module.css"


function SacarFoto(){
  const navigate = useNavigate();
  const [mostrar,setMostrar]=useState(false);
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [constraints, setConstraints]=useState("user");
  const { t } = useTranslation();

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
    if(mostrar){
      document.getElementById("divFotoID").classList.remove(`${style.oculto}`);
      document.getElementById("divCamaraID").classList.add(`${style.oculto}`);
    }else{
      document.getElementById("divFotoID").classList.add(`${style.oculto}`);
      document.getElementById("divCamaraID").classList.remove(`${style.oculto}`);
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

  function eraseAndChange(ruta){
    sessionStorage.removeItem("takenPhoto");
    navigate(ruta);
  }

  return(
    <main className={style.mainPantallaCamara}>
      <h1>{t("Camera.TakePhoto")}</h1>
      <div className={style.divCamara} id="divCamaraID">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className={style.camara}
          videoConstraints={constraints}
        />
        <div className={style.divBotones}>
          <button onClick={capture} className={style.botonCamara}><FaCamera/></button>
          <button onClick={girarCamara} className={style.botonGira}><RiCameraSwitchFill/></button>
        </div>
      </div>
      <div className={`${style.divFoto} ${style.oculto}`} id="divFotoID">
        <h2>{t("Camera.YourPhoto")}: </h2>
        {imgSrc && (<img src={imgSrc} alt="foto" className={style.fotoCamara}/>)}
        <span>{t("Camera.UploadQuestion")}</span>
        <div className={style.botonesFoto.concat(" panelBotones span2 largo")}>
          <Button
            onClick={()=> navigate("/dashboard/upload")}
            buttonSize="btn--medium"
            buttonStyle="btn--success--solid"
            icon={<FiCheck />}
          >
            {t("Buttons.Accept")}
          </Button>
          <Button
            onClick={()=>eraseAndChange("/dashboard/upload")}
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
export default SacarFoto;