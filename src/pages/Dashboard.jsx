import React from "react";

import { FiMenu } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";
import Nav from "../components/Nav";
import { ImNewspaper } from "react-icons/im";
import { MdEvent, MdPlace, MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

/*IMAGENES*/
import logo from "../images/logo.png";
import basura from "../images/basura.jpg";
import img_noticia1 from "../images/noticia1.jpg";
import img_noticia2 from "../images/noticia2.jpg";
import img_noticia3 from "../images/noticia3.jpg";

function DashBoard() {
  const handleClickNoticias = () => {
    console.log("Noticias clicked");
  };
  const navigationData = [
    {
      text: "Noticias",
      onClick: handleClickNoticias,
      icon: <ImNewspaper />,
    },
    {
      text: "Eventos",
      onClick: handleClickNoticias,
      icon: <MdEvent />,
    },
    {
      text: "Sitios",
      onClick: handleClickNoticias,
      icon: <MdPlace />,
    },
    {
      text: "Perfil",
      onClick: handleClickNoticias,
      icon: <MdAccountCircle />,
    },
  ];

  const navFooterData = [
    {
      text: "Cerrar Sesion",
      onClick: handleClickNoticias,
      icon: <FiLogOut />,
    },
  ];

  return (
    <div className="container">
      <Nav dataCenter={navigationData} dataBottom={navFooterData} />
      <main>
        <h1>Dashboard</h1>
        <div className="noticias">
          <div className="card">
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
          <div className="card">
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
          <div className="card">
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

        <div className="eventos">
          <div className="apartado">
            <h2>Eventos</h2>
            <GrCircleInformation />
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Lugar</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
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
      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span>
              <FiMenu />
            </span>
          </button>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Daniel</b>{" "}
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src={logo} alt="perfil" />
            </div>
          </div>
        </div>
        <div className="galeria">
          <div className="apartado">
            <h2>Galeria</h2>
            <GrCircleInformation />
          </div>
          <div className="imagen">
            <img src={basura} alt="basura"></img>
          </div>
          <div className="imagen">
            <img src={img_noticia2} alt="basura"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;