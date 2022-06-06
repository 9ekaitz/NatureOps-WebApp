import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/login.module.css";
import image from "../images/playa.jpg";
import { gsap } from "gsap";
/*ICONOS DE REDES SOCIALES*/
import { FaTiktok } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import Input from "../components/Input";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const { onLogin } = useAuth();
  const { t } = useTranslation();

  const refLogin = useRef();
  const refRemember = useRef();
  const refSignUp = useRef();
  const refSocialMedia = useRef();
  const refSci = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const submitInput = useRef();
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
    });
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  useEffect(() => {
    gsap.fromTo(
      refLogin.current,
      {
        delay: 0.6,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 0.6,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      usernameInput.current,
      {
        delay: 0.8,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 0.8,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      passwordInput.current,
      {
        delay: 1,
        duration: 1,
        opacity: 0,
        x: 10,
        y: 10,
      },
      {
        delay: 1,
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      refRemember.current,
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
      submitInput.current,
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
      refSignUp.current,
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
      refSocialMedia.current,
      {
        delay: 1.8,
        duration: 1,
        opacity: 0,
        y: 20,
      },
      {
        delay: 1.8,
        duration: 1,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      refSci.current,
      {
        delay: 2,
        duration: 1,
        opacity: 0,
        y: 20,
      },
      {
        delay: 2,
        duration: 1,
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <section>
      <div className={styles.imgBx}>
        <img src={image} alt="imgen de un faro" />
      </div>
      <div className={styles.contentBx}>
        <div className={styles.formBx}>
          <h2 ref={refLogin} className={styles.login}>{t("Login.Login")}</h2>
          <form onSubmit={handleLogin}>
            <Input
              reference={usernameInput}
              type="text"
              label="Login.Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              reference={passwordInput}
              type="password"
              label="Login.Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && (
              <p
                className={`${
                  errorMessage ? styles.error : styles.errorHidden
                }`}
              >
                {" "}
                {errorMessage}{" "}
              </p>
            )}
            <div ref={refRemember} className={styles.remember}>
              <label>
                <input type="checkbox" name="" />
                {t("Login.Remember me")}
              </label>
            </div>
            <Input
              reference={submitInput}
              type="submit"
              value="Login.Login Button"
            />

            <div ref={refSignUp} className={styles.inputBx}>
              <p>
                {t("Login.Don't have account yet?")}{" "}
                <a href="/registro">{t("Login.Register")}</a>
              </p>
            </div>
          </form>

          <h3 ref={refSocialMedia} className={styles.socialMedia}>{t("Login.Social media")}</h3>
          <ul ref={refSci} className={styles.sci}>
            <li className={styles.smBx}>
              <FiTwitter />
            </li>
            <li className={styles.smBx}>
              <SiInstagram />
            </li>
            <li className={styles.smBx}>
              <FaTiktok />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Login;
