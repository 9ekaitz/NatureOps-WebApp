import React, { useState, useEffect } from "react";
/*ICONOS*/

import { GrCircleInformation } from "react-icons/gr";
import { FaPen, FaTrashAlt, FaSave } from "react-icons/fa";

import Button from "../components/Button";
/*import axios from "axios";*/
import useAxiosPrivate from "../hooks/useAxiosPrivate";

/*IMAGENES*/
import logro from "../images/logro_img.png";
import logro2 from "../images/logro_img2.png";
import logro3 from "../images/logro_img3.png";
import logroNoConseguido from "../images/logroNoConseguido.png";
import playa from "../images/playa.jpg";

import "../styles/stylePerfil.css";
import "../styles/stylePerfilEdit.css";
import accessTokenSaver from "../utils/heleper";
import useAuth from "../hooks/useAuth";

/*DATOS */
const UPDATE_URL = "/api/update";


function Perfil() {
  const { setAuth } = useAuth();
  let [edit, setEdit] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usernameLabel, setUsernameLabel] = useState("username");
  const [userLabel, setUserLabel] = useState("nombre");
  const [correoLabel, setCorreoLabel] = useState("correo");

  const fetchData = async () =>{
    const response = await axiosPrivate.get("/api/get"
    );
    setUsernameLabel(response.data?.username);
    setUserLabel(response.data?.name);
    setCorreoLabel(response.data?.email);
  }
 
  useEffect(() =>{
    fetchData();
   
  },[])
  
 
  function editar() {
    setEdit(true);
    console.log("editar");
  }

  function volver() {
    setEdit(false);
  }

  const cleanFields = () =>
  {
    setUsernameLabel(username);
    setUserLabel(nombre);
    setCorreoLabel(correo);
    setUsername("");
    setNombre("");
    setCorreo("");
    
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (username != " " && nombre != " " && correo != " ") {
      try {
        let data = {"username": username, "name": nombre, "email": correo}
        const response = await axiosPrivate.post(UPDATE_URL, data, {
          headers: {
            "Content-type": "application/json",
          },
        });
        accessTokenSaver(setAuth, response, username);
        cleanFields();
        volver();
      } catch (err) {
        if(!err?.response)
        {
          setErrorMessage("El servidor no responde!");
        }
        else if(err.response?.status == 403)
        {
          setErrorMessage("token ha expirado!");
        }
        else if(err.response?.status == 409)
        {
          setErrorMessage("El nombre de usuario ya existe!")
        }
      }
    }
    else
    {
      setErrorMessage("Hay campos vacios!")
    }
  };

  useEffect(() => {
    setErrorMessage("");
  }, [username, nombre, correo])

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
          </div>

          {errorMessage && <p className={errorMessage ? "error" : "errorHidden"}> {errorMessage} </p>}

          <button type="submit" className="saveButton">
            Guardar
            <FaSave className="icon" />
          </button>
        </form>
      </div>
    );
  } else {
    //Lo que aparece cuando entras a la pagina
    userForm = (
      <div className="datosUsuario">
        <div className="datosBody">
          <h2>{usernameLabel}</h2>
          <div className="datos">
            <div className="col">
              <p>{userLabel}</p>
            </div>
            <div className="col">
              <p>{correoLabel}</p>
            </div>
          </div>
          <Button
            onClick={editar}
            buttonSize="btn--medium"
            buttonStyle="btn--primary--solid"
            icon={<FaPen />}
          >
            Editar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <main className="containerPerfil">
        <div>
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
        </div>
        <div className="right">
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
      </main>
    </React.Fragment>
  );
}

export default Perfil;
