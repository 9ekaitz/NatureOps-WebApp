import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import style from "../styles/landingPage.module.css";
import "../styles/main.css";
import { gsap } from "gsap";
import { FiMenu } from "react-icons/fi";
import { MdClose,MdKeyboardArrowDown } from "react-icons/md";


function LandingPage() {
  const { t, i18n } = useTranslation();
  let ref = useRef(null);

  
  const refNavLogo = useRef();
  const refNavList = useRef();
  const refT1 = useRef();
  const refT2 = useRef();
  const refT3 = useRef();
  const refT4 = useRef();

  const lang = ["en", "es", "eu"];

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      refNavLogo.current,
      {
        delay: 1.2,
        duration: 2.5,
        opacity: 0,
      },
      {
        delay: 1.2,
        duration: 2.5,
        opacity: 1,
      }
    );
    gsap.fromTo(
      refNavList.current,
      {
        delay: 1.3,
        duration: 2,
        opacity: 0,
        y: 30,
      },
      {
        delay: 1.3,
        duration: 2,
        opacity: 1,
        y: 0,
      }
    );

    gsap.fromTo(
      refT1.current,
      {
        delay: 2,
        duration: 1,
        opacity: 0,
      },
      {
        delay: 2,
        duration: 1,
        opacity: 1,
      }
    );
    gsap.fromTo(
      refT2.current,
      {
        delay: 2.2,
        duration: 1,
        opacity: 0,
      },
      {
        delay: 2.2,
        duration: 1,
        opacity: 1,
      }
    );
    gsap.fromTo(
      refT3.current,
      {
        delay: 2.6,
        duration: 1,
        opacity: 0,
      },
      {
        delay: 2.6,
        duration: 1,
        opacity: 1,
      }
    );
    gsap.fromTo(
      refT4.current,
      {
        delay: 2.8,
        duration: 1,
        opacity: 0,
      },
      {
        delay: 2.8,
        duration: 1,
        opacity: 1,
      }
    );
  }, []);

  function cerraryAbrir(e) {
    setToggle(e);
  }

  return (
    <div ref={ref} id={style.landingPage}>
      <header className={style.lHeader} id="navBar">
        <nav className={`${style.nav} ${style.bdGrid}`}>
          <div>
            <a href="https://www.google.es" ref={refNavLogo} className={style.navLogo}>
              NatureOps
            </a>
          </div>

          <div className={style.navToggle} id={style.nav_toggle}>
            <FiMenu name="menu" onClick={() => cerraryAbrir(true)}></FiMenu>
          </div>

          <div
            className={`${style.navMenu} ${toggle ? style.show : ""}`}
            id="nav-menu"
          >
            <div className={style.navClose} id="nav-close">
              <MdClose name="x" onClick={() => cerraryAbrir(false)}></MdClose>
            </div>

            <ul className={style.navList} ref={refNavList}>
              <li className={style.navItem}>
                <a href="/" className={style.navLink}>
                  {t("Landing.Nav.Who we are")}
                </a>
              </li>
              <li className={style.navItem}>
                <a href="/login" className={style.navLink}>
                  {t("Landing.Nav.Login")}
                </a>
              </li>
              <li className={style.navItem}>
                <div className={`${style.navLink} ${style.itemIdioma}`}>
                  <span className={style.itemName}>
                    {t("Landing.Nav.Language")}
                    <MdKeyboardArrowDown/>
                  </span>
                  <div className={style.dropDown}>
                    {lang.map((l, key) => <button key={key} onClick={() => i18n.changeLanguage(l)} >{t(`lang.${l}`)}</button>)}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className={style.contenido}>
        <span className={style.T1} ref={refT1}>{t("Landing.Beluga Presents")}</span>
        <h3 className={style.T2} ref={refT2}>{t("Landing.NatureOps planeta Verde")}</h3>
        <p className={style.T3} ref={refT3}> {t("Landing.NatureOps problema")}</p>
        <a href="/login">
          <button className={style.T4} ref={refT4}>{t("Landing.Start")}</button>
        </a>
       
      </div>

      <div className={style.imagenDeFondo}></div>
    </div>
  );
}

export default LandingPage;
