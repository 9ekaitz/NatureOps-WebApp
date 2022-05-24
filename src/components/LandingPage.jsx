import React, { useEffect, useState } from "react"
import {useRef} from "react";
import "../styles/styleLandingPage.css"
import { gsap } from "gsap"


function LandingPage() {

  let ref = useRef(null)
  const [toggle, setToggle] = useState(false);


  window.onload = () => {
    document.getElementById("nav-bar").classList.remove("espera");
  };

  useEffect(() =>{
    const element = ref.current;
    gsap.fromTo(element.querySelector(".nav__logo"),
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
    /*gsap.fromTo( element.querySelector(".nav__toggle"),
      {
        delay: 1.2,
        duration: 1,
        opacity: 0,
        y: 10,
      },
      {
        delay: 1.2,
        duration: 1,
        opacity: 1,
        y: 0,
      }
    );*/
    gsap.fromTo( element.querySelector(".nav__list"),
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
  
    gsap.fromTo( element.querySelector(".T1"),
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
    gsap.fromTo( element.querySelector(".T2"),
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
    gsap.fromTo( element.querySelector(".T3"),
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
    gsap.fromTo( element.querySelector(".T4"),
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
  
  },[])

  function cerraryAbrir(e)
  {
    setToggle(e)
  }

  return (
    <div ref={ref} id="landingPage">
      <header className="l-header espera" id ="nav-bar">
        <nav className="nav bd-grid" >
          <div>
            <a href="https://www.google.es" className="nav__logo">NatureOps</a>
          </div>
        
          <div className="nav__toggle" id="nav-toggle">
            <box-icon name='menu' onClick={() => cerraryAbrir(true)}></box-icon>
          </div>

          <div className={toggle ? "nav__menu show" : "nav__menu"}id="nav-menu">
            <div className="nav__close" id="nav-close">
              <box-icon name='x' onClick={() => cerraryAbrir(false)}></box-icon>
            </div>

            <ul className="nav__list">
              <li className="nav__item"><a href="https://www.google.es" className="nav__link">Quiénes Somos</a></li>
              <li className="nav__item"><a href="/login" className="nav__link">Iniciar Sesión</a></li>
              <li className="nav__item">
                <a href="https://www.google.es" className="nav__link itemIdioma">Idioma</a>  
              </li>

            </ul>
          </div>
        </nav>
      </header>

      <div className="contenido" >
        <span className='T1'>Beluga Team presenta</span>
        <h3 className='T2'>NatureOps para un planeta mas verde</h3>
        <p className='T3'>La cantidad de residuos en las playas y rios ha crecido drasticamente en los últimos años. NatureOps ofrece una solución para luchar contra la contaminación gracias a sus funcionalidades y una comunidad unida.</p>
        <button className='T4'>Comenzar</button>
      </div>
  
      <div className="imagenDeFondo"></div>
  
    </div>
 
  );
}

export default LandingPage;