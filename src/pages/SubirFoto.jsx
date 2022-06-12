import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Slider } from "@mui/material";
import { SpiralSpinner } from "react-spinners-kit";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

import { BsCamera } from "react-icons/bs";
import { MdUploadFile } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import Modal from "../components/Modal";

import "../styles/styleGeneralForms.css";
import style from "../styles/subirFoto.module.css";

function SubirFotoPrueba() {
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dialogContent, setDialogContent] = useState(false);
  const [score, setScore] = useState(0);
  let [image, setImage] = useState(null);
  const [place, setPlace] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const [size, setSize] = useState(0);
  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  function eraseAndChange(ruta) {
    sessionStorage.removeItem("takenPhoto");
    navigate(ruta);
  }

  function mostrarTexto() {
    var checkBox = document.getElementById("checkSitio");
    var text = document.getElementById("inputOculto");

    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  const fetchPlaces = async () => {
    let res = await axiosPrivate.get("/api/places");
    setPlaceList(res?.data);
  };

  const handleSubmit = async () => {
    if (!image) return;
    setDialog(true);
    const formData = new FormData();
    formData.append("location", place);
    formData.append("size", size);

    const blob = await (await fetch(image)).blob();
    formData.append("image", blob, "image.png");
    if (!loading) {
      try {
        setLoading(true);
        const res = await axiosPrivate.post("/api/submit", formData);
        setScore(res?.data?.score);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeHandler = (e) => {
    sessionStorage.removeItem("takenPhoto");
    const fileReader = new FileReader();

    fileReader.onload = (event) => setImage(event.target.result);
    if (e.target.files[0] != null) fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    const imageString = sessionStorage.getItem("takenPhoto");
    if (imageString) {
      setImage(JSON.parse(imageString));
    }
    fetchPlaces();
  }, []);

  useEffect(() => {
    if (placeList.size > 0) {
      setPlace(placeList[0].length);
    }
  }, [placeList]);

  useEffect(() => {
    if (loading) {
      setDialogContent(
        <SpiralSpinner
          frontColor="var(--primary)"
          backColor="var(--secondary)"
          size={64}
          sizeUnit="px"
        />
      );
    } else {
      setDialogContent(
        <React.Fragment>
          <span>Score: {score}</span>
          <div>
            <Button
              buttonStyle="btn--success--outline"
              buttonSize="btn--medium"
              icon={<FiCheck />}
              onClick={() => setDialog(false)}
            >
              Ok
            </Button>
          </div>
        </React.Fragment>
      );
    }
  }, [loading]);

  return (
    <main
      className={style.seleccionarImagenContainer}
      data-testid="subirImagen"
    >
      <div className={style.seleccionarImagen} data-testid="subirImagen">
        <h1>{t("UploadImage.AddImage")}</h1>
        <div className={style.añadirImagen}>
          <h2>{t("UploadImage.Options")}: </h2>
          <div className={style.divOpciones}>
            <div className={style.subir}>
              <span id="fileSpan">
                <MdUploadFile className={style.iconGrande} />
                {t("UploadImage.UploadImage")}
              </span>
              <input
                type="file"
                id="fileInput"
                onChange={changeHandler}
                accepts="image/*"
                className="inputFile"
              />
            </div>
            <button
              className={style.sacarFoto}
              onClick={() => eraseAndChange("/dashboard/camara")}
            >
              <BsCamera className={style.iconGrande} />
              {t("UploadImage.TakePhoto")}
            </button>
          </div>
          <div className={style.detallesDeFoto}>
            <h2>{t("UploadImage.Details")}: </h2>
            <div className="formLugar">
              <label htmlFor="lname">Lugares</label>
              <select
                className="dropdown"
                onChange={(e) => setPlace(e.target.value)}
              >
                {placeList.map((place) => (
                  <option key={place.name}>{place.name}</option>
                ))}{" "}
              </select>
            </div>
            <div className="formNuevoLugar">
              <div className="formCheck">
                <input
                  type="checkbox"
                  id="checkSitio"
                  name="vehicle1"
                  value="Quiero registrar un nuevo sitio"
                  className="inputClass"
                  onClick={mostrarTexto}
                ></input>
                <label htmlFor="lname">Lugar name</label>
              </div>
              <input
                type="text"
                id="inputOculto"
                name="lname"
                className="inputClass oculto"
                placeholder="Hello"
              />
            </div>
            <div>
              <label htmlFor="tamaño">{t("UploadImage.Size")}: </label>
              <Slider
                aria-label="Size"
                defaultValue={0}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
                step={10}
                min={10}
                max={100}
              />
            </div>
          </div>
          <div className={style.fotoElegida}>
            <h2>{t("UploadImage.ChosenImage")}: </h2>
            {image && (
              <img
                src={image}
                alt="taken"
                id="takenIMG"
                className={style.imgPreview}
              ></img>
            )}
          </div>
          <div className={style.buttons}>
            <Button
              onClick={handleSubmit}
              buttonSize="btn--medium"
              buttonStyle="btn--success--solid"
              icon={<FiCheck />}
            >
              {t("Buttons.Accept")}
            </Button>
            <Button
              onClick={() => eraseAndChange("/dashboard")}
              buttonSize="btn--medium"
              buttonStyle="btn--danger--solid"
              icon={<VscChromeClose />}
            >
              {t("Buttons.Cancel")}
            </Button>
          </div>
        </div>
      </div>
      <Modal show={dialog} setShow={setDialog}>
        <div className={style.dialog}>
          <h1>{loading ? "Uploading Image" : "Image Uploaded!"}</h1>
          {dialogContent}
        </div>
      </Modal>
    </main>
  );
}

export default SubirFotoPrueba;
