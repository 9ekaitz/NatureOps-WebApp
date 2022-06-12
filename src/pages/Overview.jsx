import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router";
import { GrCircleInformation } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";

import FloatingButton from "../components/FloatingButton";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import basura from "../images/basura.jpg";
import img_noticia2 from "../images/noticia2.jpg";

import style from "../styles/styleSidebar.module.css";

function Overview() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const axiosPrivate = useAxiosPrivate();


  const fetchData = async () => {

    const response = await axiosPrivate.get("/api/news/0/3");
    setItems(response.data);
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cargarImagenNoti = require.context("../images", true);
  const DisplayNoticias = items.map((record) => {
    return (
      <div className={style.card} key={record.id} itemsPerPage="3">
        <img src={cargarImagenNoti(`./${record.image}`)} alt={record.id} />
        <h4>{record.title}</h4>
        <p>{record.content}</p>
        <a href={record.url}>Leer más</a>
      </div>
    );
  });

  return (
    <main className={style.dashboardContainer}>
      <h1>Dashboard</h1>
      <div className={style.noticias}>
        {DisplayNoticias}
      </div>
      <div className={style.galeria}>
        <div className={style.apartado}>
          <h2>{t("Dashboard.Main.PhotoGallery")}</h2>
          <GrCircleInformation />
        </div>
        <div className={style.imagen}>
          <img src={basura} alt="basura"></img>
        </div>
        <div className={style.imagen}>
          <img src={img_noticia2} alt="basura"></img>
        </div>
      </div>
      <div className={style.eventos}>
        <div className={style.apartado}>
          <h2>{t("Dashboard.Main.Events")}</h2>
          <GrCircleInformation />
        </div>
        <table>
          <thead>
            <tr>
              <th>{t("CreateEvent.NameNewEvent")}</th>
              <th>{t("CreateEvent.Place")}</th>
              <th>{t("CreateEvent.Date")}</th>
              <th>{t("CreateEvent.Time")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={style.tableBody}>
            <tr>
              <td>Evento plastico</td>
              <td>Playa Laida</td>
              <td>10/06/2022</td>
              <td>10:30</td>
            </tr>
            <tr>
              <td>Evento carton</td>
              <td>Playa Laga</td>
              <td>15/06/2022</td>
              <td>15:30</td>
            </tr>
            <tr>
              <td>Donostia garbitu</td>
              <td>La Zurriola</td>
              <td>22/06/2022</td>
              <td>11:00</td>
            </tr>
            <tr>
              <td>Evento plastico</td>
              <td>Playa Laida</td>
              <td>10/06/2022</td>
              <td>10:30</td>
            </tr>
          </tbody>
        </table>
      </div>
      <FloatingButton handleClick={() => navigate("upload")}>
        <FiPlus />
      </FloatingButton>
    </main>
  );
}

export default Overview;
