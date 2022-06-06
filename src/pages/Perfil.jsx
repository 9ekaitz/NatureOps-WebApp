import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { GrCircleInformation } from "react-icons/gr";
import { FaPen, FaTrashAlt, FaSave } from "react-icons/fa";

import Button from "../components/Button";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import style from "../styles/stylePerfil.module.css";
import styleLabel from "../styles/stylePerfilEdit.module.css";

import "../styles/main.css";
/*IMAGENES*/
import logro from "../images/logro_img.png";
import logro2 from "../images/logro_img2.png";
import logro3 from "../images/logro_img3.png";
import logroNoConseguido from "../images/logroNoConseguido.png";
import playa from "../images/playa.jpg";

import useAuth from "../hooks/useAuth";

/*DATOS */
const UPDATE_URL = "/api/update";

function Perfil() {
  const { auth } = useAuth();
  let [edit, setEdit] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usernameLabel, setUsernameLabel] = useState("username");
  const [userLabel, setUserLabel] = useState("nombre");
  const [correoLabel, setCorreoLabel] = useState("correo");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/api/get");
      setUsernameLabel(response.data?.username);
      setUserLabel(response.data?.name);
      setCorreoLabel(response.data?.email);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, [auth]);

  function editar() {
    setEdit(true);
    console.log("editar");
  }

  function volver() {
    setEdit(false);
  }

  const cleanFields = () => {
    // setUsernameLabel(username);
    // setUserLabel(nombre);
    // setCorreoLabel(correo);
    setUsername("");
    setNombre("");
    setCorreo("");
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (username != " " && nombre != " " && correo != " ") {
      try {
        let data = { username: username, name: nombre, email: correo };
        const response = await axiosPrivate.post(UPDATE_URL, data, {
          headers: {
            "Content-type": "application/json",
          },
        });
        auth.setAccessToken(response.data.access_token);
        auth.setRefreshToken(response?.data?.refresh_token);
        cleanFields();
        volver();
      } catch (err) {
        if (!err?.response) {
          setErrorMessage("El servidor no responde!");
        } else if (err.response?.status == 403) {
          setErrorMessage("token ha expirado!");
        } else if (err.response?.status == 409) {
          setErrorMessage("El nombre de usuario ya existe!");
        }
      }
    } else {
      setErrorMessage("Hay campos vacios!");
    }
  };

  useEffect(() => {
    setErrorMessage("");
  }, [username, nombre, correo]);

  let userForm;
  if (edit) {
    userForm = (
      <div className={style.datosUsuario}>
        <form className={style.form} onSubmit={handleSubmitForm}>
          <div className={`${styleLabel.inputBox} ${styleLabel.primero}`}>
            <input
              type="text"
              placeholder=" "
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username" className={styleLabel.labelName}>
              <span className={styleLabel.contentName}>Username</span>
            </label>
          </div>
          <div className={style.col} id="col1">
            <div className={styleLabel.inputBox}>
              <input
                type="text"
                placeholder=" "
                name="name"
                required
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="name" className={styleLabel.labelName}>
                <span className={styleLabel.contentName}>Nombre</span>
              </label>
            </div>
          </div>
          <div className={style.col} id="col2">
            <div className={styleLabel.inputBox}>
              <input
                type="email"
                placeholder=" "
                name="email"
                required
                onChange={(e) => setCorreo(e.target.value)}
              />
              <label htmlFor="email" className={styleLabel.labelName}>
                <span className={styleLabel.contentName}>Correo</span>
              </label>
            </div>
          </div>

          {errorMessage && (
            <p className={`${errorMessage ? style.error : style.errorHidden}`}>
              {" "}
              {errorMessage}{" "}
            </p>
          )}

          <button type="submit" className={styleLabel.saveButton}>
            Guardar
            <FaSave className={styleLabel.icon} />
          </button>
        </form>
      </div>
    );
  } else {
    //Lo que aparece cuando entras a la pagina
    userForm = (
      <div className={style.datosUsuario}>
        <div className={style.datosBody}>
          <h2>{usernameLabel}</h2>
          <div className={style.datos}>
            <div className={styleLabel.col}>
              <p>{userLabel}</p>
            </div>
            <div className={styleLabel.col}>
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
      <main className={style.containerPerfil}>
        <div className={style.izquierda}>
          {userForm}
          <div className={style.logros}>
            <div className={style.apartado}>
              <h2>Logros obtenidos</h2>
              <a href="https://www.google.com">Ver todos</a>
            </div>
            <div className={style.listaLogros}>
              <img className={style.logroImg} src={logro} alt="Logro" />
              <img className={style.logroImg} src={logro2} alt="Logro" />
              <img className={style.logroImg} src={logro3} alt="Logro" />
              <img className={style.logroImg} src={logro} alt="Logro" />
              <img className={style.logroImg} src={logro2} alt="Logro" />
              <img className={style.logroImg}src={logroNoConseguido} alt="Logro" />
              <img className={style.logroImg} src={logroNoConseguido} alt="Logro" />
              <img className={style.logroImg} src={logroNoConseguido} alt="Logro" />
            </div>
            <button className={style.deleteButton}>
              Eliminar cuenta
              <FaTrashAlt className={style.icon} />
            </button>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.galeria}>
            <div className={style.apartado}>
              <h2>Recientes</h2>
              <GrCircleInformation />
            </div>
            <div className={style.listaRecientes}>
              <div className={style.recientesCard}>
                <span>Te has suscrito a</span>
                <div className={style.cardBody}>
                  <p>Evento GreenPeace</p>
                  <p>2022-05-22</p>
                  <img src={playa} alt="playa" />
                </div>
              </div>
            
            </div>
            <div className={style.listaRecientes}>
              <div className={style.recientesCard}>
                <span>Te has suscrito a</span>
                <div className={style.cardBody}>
                  <p>Evento GreenPeace</p>
                  <p>2022-05-22</p>
                  <img src={playa} alt="playa" />
                </div>
              </div>       
            </div>
            <div className={style.listaRecientes}>
              <div className={style.recientesCard}>
                <span>Te has suscrito a</span>
                <div className={style.cardBody}>
                  <p>Evento GreenPeace</p>
                  <p>2022-05-22</p>
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
