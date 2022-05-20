import React, { useEffect } from "react"
import {useRef} from "react";
import "../styles/styleLogin.css"
import image from "../images/faro.jpg"
/*import BoxIcons from "boxicons"*/
import { gsap } from "gsap"

function Registro() {

  let ref = useRef(null)

  

  useEffect(() =>{
    const element = ref.current;

    gsap.fromTo( element.querySelector(".login"),
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
    gsap.fromTo( element.querySelector(".name"),
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
    gsap.fromTo( element.querySelector(".apellido"),
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
    gsap.fromTo( element.querySelector(".username"),
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
    gsap.fromTo( element.querySelector(".password"),
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
    gsap.fromTo( element.querySelector(".passwordrep"),
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
    gsap.fromTo( element.querySelector(".boton"),
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
   
  })



  return (
    <section ref={ref}>
      <div className="imgBx" alt="imgen de un faro">
        <img src={image} alt="imagenFaro"/>
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2 className="login">Registrarse</h2>
          <form>
            <div className="inputBx name">
              <span>Nombre</span>
              <input type="text" name=""/>
            </div>
            <div className="inputBx apellido">
              <span>Apellido</span>
              <input type="text" name=""/>
            </div>
            <div className="inputBx username">
              <span>Nombre de usuario</span>
              <input type="text" name=""/>
            </div>
            <div className="inputBx password">
              <span>Contraseña</span>
              <input type="password" name=""/>
            </div>
            <div className="inputBx passwordrep">
              <span>Repetir contraseña</span>
              <input type="password" name=""/>
            </div>
            <div className="inputBx boton">
              <input type="submit" value="Registarse" name=""/>
            </div>
          </form>
            
        </div>
      </div>
    </section>
  );
}
export default Registro;