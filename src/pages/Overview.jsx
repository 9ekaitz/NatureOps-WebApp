import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { useTranslation } from "react-i18next";

import basura from "../images/basura.jpg";
import img_noticia1 from "../images/noticia1.jpg";
import img_noticia2 from "../images/noticia2.jpg";
import img_noticia3 from "../images/noticia3.jpg";

import style from "../styles/styleSidebar.module.css";

function Overview() {

  const { t } = useTranslation();

  return (
    <main className={style.dashboardContainer}>
      <h1>Dashboard</h1>
      <div className={style.noticias}>
        <div className={style.card}>
          <img src={img_noticia1} alt="noticia1" />
          <h4>La Costa Vasca contaminada</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            sunt numquam quidem, impedit quis ipsa fugit excepturi alias
            voluptatibus ratione.
          </p>
          <a href="https://www.farodevigo.es/arousa/2022/05/17/basura-marina-cuento-acabar-66204508.html">
            Leer más
          </a>
        </div>
        <div className={style.card}>
          <img src={img_noticia2} alt="noticia2" />
          <h4>La Costa Vasca contaminada</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            sunt numquam quidem, impedit quis ipsa fugit excepturi alias
            voluptatibus ratione.
          </p>
          <a href="https://www.farodevigo.es/arousa/2022/05/17/basura-marina-cuento-acabar-66204508.html">
            Leer más
          </a>
        </div>
        <div className={style.card}>
          <img src={img_noticia3} alt="noticia2" />
          <h4>La Costa Vasca contaminada</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            sunt numquam quidem, impedit quis ipsa fugit excepturi alias
            voluptatibus ratione.
          </p>
          <a href="https://www.farodevigo.es/arousa/2022/05/17/basura-marina-cuento-acabar-66204508.html">
             Leer más
          </a>
        </div>
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

    </main>
  );
}

export default Overview;
