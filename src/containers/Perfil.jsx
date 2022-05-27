import React, { useState } from "react";
/*, { useState }*/
import Aside from "./componentsDashBoard/Aside.jsx";
/*ICONOS*/

import { FiMenu } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";
import { FaPen, FaTrashAlt, FaSave } from "react-icons/fa";

/*IMAGENES*/
import logo from "../images/logo.png";
import logro from "../images/logro_img.png";
import logro2 from "../images/logro_img2.png";
import logro3 from "../images/logro_img3.png";
import logroNoConseguido from "../images/logroNoConseguido.png";
import playa from "../images/playa.jpg";

import "../styles/styleSidebar.css";
import "../styles/stylePerfil.css";
import "../styles/stylePerfilEdit.css";

/*DATOS */

import data from "../data/perfil.json";

function Perfil() {
  let [edit, setEdit] = useState(false);
  function abrirNavbar() {
    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  function editar() {
    setEdit(true);
    console.log("editar");
  }
  const [username, setUsername] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codPostal, setCodPostal] = useState("");

  function volver() {
    setEdit(false);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (username != "" && nombre != "" && apellidos != "" && telefono != "") {
      if (correo != "" && direccion != "" && codPostal != "") {
        volver();
      }
    }
  };

  let userForm;
  if (edit) {
    userForm = (
      <div className="datosUsuario">
        <form className="form" onSubmit={handleSubmitForm}>
          <div className=" inputBox primero">
            <input
              type="text"
              placeholder=" "
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username" className="label-name">
              <span className="content-name">Username</span>
            </label>
          </div>
          <div className="col" id="col1">
            <div className="inputBox">
              <input
                type="text"
                placeholder=" "
                name="name"
                required
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Nombre</span>
              </label>
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder=" "
                name="apellidos"
                required
                onChange={(e) => setApellidos(e.target.value)}
              />
              <label htmlFor="apellidos" className="label-name">
                <span className="content-name">Apellidos</span>
              </label>
            </div>
            <div className="inputBox">
              <input
                type="tel"
                placeholder=" "
                name="phone"
                required
                onChange={(e) => setTelefono(e.target.value)}
              />
              <label htmlFor="phone" className="label-name">
                <span className="content-name">Telefono</span>
              </label>
            </div>
          </div>
          <div className="col" id="col2">
            <div className="inputBox">
              <input
                type="email"
                placeholder=" "
                name="email"
                required
                onChange={(e) => setCorreo(e.target.value)}
              />
              <label htmlFor="email" className="label-name">
                <span className="content-name">Correo</span>
              </label>
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder=" "
                name="address"
                required
                onChange={(e) => setDireccion(e.target.value)}
              />
              <label htmlFor="address" className="label-name">
                <span className="content-name">Dirección</span>
              </label>
            </div>
            <div className="inputBox">
              <input
                type="number"
                placeholder=" "
                name="codigoPostal"
                onChange={(e) => setCodPostal(e.target.value)}
              />
              <label htmlFor="codigoPostal" className="label-name">
                <span className="content-name">Código Postal</span>
              </label>
            </div>
          </div>
          <button type="submit" className="saveButton">
            Guardar
            <FaSave className="icon" />
          </button>
        </form>
      </div>
    );
  } else if (username != "" && !edit) {
    let user = {
      username: username,
      nombre: nombre,
      apellidos: apellidos,
      telefono: telefono,
      correo: correo,
      direccion: direccion,
      codPostal: codPostal,
    };

    console.log(user);
    userForm = (
      <div className="datosUsuario">
        <div className="datosBody">
          <h2>{username}</h2>
          <div className="datos">
            <div className="col">
              <p>{nombre}</p>
              <p>{apellidos}</p>
              <p>{telefono}</p>
            </div>
            <div className="col">
              <p>{correo}</p>
              <p>{direccion}</p>
              <p>{codPostal}</p>
            </div>
          </div>
          <button className="editButton" onClick={editar}>
            Editar
            <FaPen className="icon" />
          </button>
        </div>
      </div>
    );
  } else {
    //Lo que aparece cuando entras a la pagina
    userForm = (
      <div className="datosUsuario">
        <div className="datosBody">
          <h2>{data.username}</h2>
          <div className="datos">
            <div className="col">
              <p>{data.nombre}</p>
              <p>{data.apellidos}</p>
              <p>{data.telefono}</p>
            </div>
            <div className="col">
              <p>{data.correo}</p>
              <p>{data.direccion}</p>
              <p>{data.codPostal}</p>
            </div>
          </div>
          <button className="editButton" onClick={editar}>
            Editar
            <FaPen className="icon" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Aside />
      <main className="containerPerfil">
        <img className="imagenCentro" src={logo} alt="Logo" />
        {userForm}
        <div className="logros">
          <div className="apartado">
            <h2>Logros obtenidos</h2>
            <a href="https://www.google.com">Ver todos</a>
          </div>
          <div className="listLogros">
            <img className="logroImg" src={logro} alt="Logro" />
            <img className="logroImg" src={logro2} alt="Logro" />
            <img className="logroImg" src={logro3} alt="Logro" />
            <img className="logroImg" src={logro} alt="Logro" />
            <img className="logroImg" src={logro2} alt="Logro" />
            <img className="logroImg" src={logroNoConseguido} alt="Logro" />
            <img className="logroImg" src={logroNoConseguido} alt="Logro" />
            <img className="logroImg" src={logroNoConseguido} alt="Logro" />
          </div>
          <button className="deleteButton">
            Eliminar cuenta
            <FaTrashAlt className="icon" />
          </button>
        </div>
      </main>
      <div className="right">
        <div className="top">
          <button id="menu-btn" onClick={abrirNavbar}>
            <span>
              <FiMenu />
            </span>
          </button>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>{data.nombre}</b>{" "}
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
            <h2>Recientes</h2>
            <GrCircleInformation />
          </div>
          <div className="listRecientes">
            <div className="recientesCard">
              <span>Te has suscrito a</span>
              <div className="cardBody">
                <p>Evento GreenPeace</p>
                <p>2022-05-22</p>
                <img src={playa} alt="playa" />
              </div>
            </div>
            <div className="recientesCard">
              <span>Te has desuscrito de</span>
              <div className="cardBody">
                <p>Evento Carton</p>
                <p>2022-05-22</p>
                <img src={playa} alt="playa" />
              </div>
            </div>
            <div className="recientesCard">
              <span>Has creado</span>
              <div className="cardBody">
                <p>Evento Papel</p>
                <p>2022-05-28</p>
                <img src={playa} alt="playa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
