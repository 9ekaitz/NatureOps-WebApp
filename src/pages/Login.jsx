import React, { useEffect, useState, useRef } from "react";
import "../styles/styleLogin.css";
import image from "../images/playa.jpg";
import { gsap } from "gsap";
/*ICONOS DE REDES SOCIALES*/
import { FaTiktok } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import useAuth from "../hooks/useAuth";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const { onLogin } = useAuth();

  let ref = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    onLogin({ username: username, password: password }).catch((err) => {
      if (!err?.response) {
        setErrorMessage("El servidor no responde!");
      } else if (err.response?.status == 401) {
        setErrorMessage("Usuario o contraseña incorrectos!");
      }
    })
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".login"),
      {
        delay: 1.2,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 1.2,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".username"),
      {
        delay: 1.4,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 1.4,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".password"),
      {
        delay: 1.6,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 1.6,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".remember"),
      {
        delay: 1.8,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 1.8,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".boton"),
      {
        delay: 2,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 2,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".signUp"),
      {
        delay: 2.2,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 2.2,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".socialMedia"),
      {
        delay: 2.6,
        duration: 1,
        opacity: 0,
        y: 20,
      },
      {
        delay: 2.6,
        duration: 1,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      element.querySelector(".sci"),
      {
        delay: 2.8,
        duration: 1,
        opacity: 0,
        y: 20,
      },
      {
        delay: 2.8,
        duration: 1,
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <section ref={ref}>
      <div className="imgBx">
        <img src={image} alt="imgen de un faro" />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2 className="login">Inicio de sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="inputBx username">
              <span>Nombre de usuario</span>
              <input
                type="text"
                name=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputBx password">
              <span>Contraseña</span>
              <input
                type="password"
                name=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className={errorMessage ? "error" : "errorHidden"}>
                {" "}
                {errorMessage}{" "}
              </p>
            )}

            <div className="remember">
              <label>
                <input type="checkbox" name="" /> Recordar nombre de usuario
              </label>
            </div>
            <div className="inputBx boton">
              <input type="submit" value="Acceder" name="" />
            </div>

            <div className="inputBx signUp">
              <p>
                ¿No tienes una cuenta? <a href="/registro">Registarse</a>
              </p>
            </div>
          </form>

          <h3 className="socialMedia">Visita nuestras redes sociales</h3>
          <ul className="sci">
            <li className="smBx">
              <FiTwitter />
            </li>
            <li className="smBx">
              <SiInstagram />
            </li>
            <li className="smBx">
              <FaTiktok />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Login;
