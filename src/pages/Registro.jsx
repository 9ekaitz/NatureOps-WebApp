import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/registro.module.css";
import image from "../images/faro.jpg";
import { gsap } from "gsap";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

import Input from "../components/Input";

const REGISTRO_URL = "/api/register";

function Registro() {
  const { t } = useTranslation();
  const { onLogin } = useAuth();
  const refLogin = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const rPasswordInput = useRef();
  const submitInput = useRef();

  const [errorMessage, setErrorMessage] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [passwordRep, setPasswordRep] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [username, password, name, correo, passwordRep]);

  useEffect(() => {
    gsap.fromTo(
      refLogin.current,
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
      nameInput.current,
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
      emailInput.current,
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
      usernameInput.current,
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
      passwordInput.current,
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
      rPasswordInput.current,
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
      submitInput.current,
      {
        delay: 2.4,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 2.4,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
  }, []);

  const cleanFields = () => {
    setUsername("");
    setPassword("");
    setCorreo("");
    setName("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != passwordRep) {
      setErrorMessage("Las contaseñas no coinciden!");
    } else {
      const data = {
        username: username,
        password: password,
        email: correo,
        name: name,
      };
      try {
        await axios.post(REGISTRO_URL, data, {
          headers: {
            "Content-type": "application/json",
          },
        });
        cleanFields();
        onLogin({ username: username, password: password });
      } catch (err) {
        if (!err?.response) {
          setErrorMessage("El servidor no responde!");
        } else if (err.response?.status == 409) {
          setErrorMessage(err.response?.data);
        }
      }
    }
  };

  return (
    <section>
      <div className={styles.imgBx} alt="imgen de un faro">
        <img src={image} alt="imagenFaro" />
      </div>
      <div className={styles.contentBx}>
        <div className={styles.formBx}>
          <h2 ref={refLogin}>{t("Register.Register")}</h2>
          <form onSubmit={handleSubmit}>
            <Input
              reference={nameInput}
              label="Register.Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              reference={emailInput}
              label="Register.Email"
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Input
              reference={usernameInput}
              label="Register.Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              reference={passwordInput}
              label="Register.Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              reference={rPasswordInput}
              label="Register.Repeat Password"
              type="password"
              value={passwordRep}
              onChange={(e) => setPasswordRep(e.target.value)}
            />
            {errorMessage && (
              <p className={errorMessage ? "error" : "errorHidden"}>
                {" "}
                {errorMessage}{" "}
              </p>
            )}
            <Input
              reference={submitInput}
              type="submit"
              value="Register.Register Button"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Registro;
