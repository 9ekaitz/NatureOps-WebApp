import React, {useState} from "react";
import { useNavigate } from "react-router";
import { FiCheck } from "react-icons/fi"
import { VscChromeClose } from "react-icons/vsc"
import styles from "../styles/crearNoticia.module.css"
import "../styles/styleGeneralForms.css"
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const URL = "/api/news/save";

function CrearNoticia() {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [url, setUrl] = useState("");

  const handleClickSendForm = async () =>{
    const valores = {
      title: title,
      subtitle: subtitle,
      content: summary,
      image: "noticia2.jpg",
      url : url, 
      enabled : true
    };
    try{
      await axiosPrivate.post(URL, valores, {
        headers: {
          "Content-type": "application/json",
        },
      });

      navigate("/dashboard/noticias");

    } catch (err) {
      handleClickReset(); 
    }

  
  }

  function handleClickReset ()
  {
    setTitle("");
    setSubTitle("");
    setSummary("");
    setUrl("");
    navigate("/dashboard/noticias");
  }

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
          <input type="text" id="fTitulo" className={styles.inputClass} value={title}  onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fAutor">{t("CreateNews.Author")}:</label>
          <input type="text" id="fAutor" className={styles.inputClass} value={subtitle}  onChange={(e) => setSubTitle(e.target.value)}/>
        </div>
        <div className={styles.formImagen}>
          <label htmlFor="fResumen">{t("CreateNews.Summary")}: </label>
          <input type="text" id="resumenInput" name="fname" className={styles.inputClass} value={summary}  onChange={(e) => setSummary(e.target.value)}/>
        </div>
        <div className={styles.foto}>
          <span id="fileSpan">{t("CreateNews.SelectImage")}</span>
          <input type="file" id="fileInput" name="fname" onChange={changeText}/>
        </div>
        <div className={`${styles.url} ${styles.formImagen}`}>
          <label htmlFor="fUrl">URL: </label>
          <input type="text" id="fUrl" className={styles.inputClass} value={url}  onChange={(e) => setUrl(e.target.value)}/>
        </div>         
        <div className="panelBotones">
          <Button
            onClick={() => handleClickSendForm()}
            buttonSize="btn--medium"
            buttonStyle="btn--success--solid"
            icon={<FiCheck />}
          >
            {t("Buttons.Accept")}
          </Button>
          <Button
            onClick={() => handleClickReset()}
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