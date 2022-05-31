import React, { useEffect , useState} from "react"
import {useNavigate, useLocation} from "react-router-dom";
import {useRef} from "react";
import "../styles/styleRegistro.css"
import image from "../images/faro.jpg"
/*import BoxIcons from "boxicons"*/
import { gsap } from "gsap"
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import accessTokenSaver from "../utils/heleper";


const REGISTRO_URL = "/api/register";


function Registro() {
  
  const { setAuth } = useAuth();
  let ref = useRef(null)
  const [errorMessage, setErrorMessage] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [passwordRep, setPasswordRep] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [username, password, name, correo, passwordRep])



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
   
  },[])

  const cleanFields = () =>
  {
    setUsername("");
    setPassword("");
    setCorreo("");
    setName("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password != passwordRep)
    {
      setErrorMessage("Las contaseñas no coinciden!");
    }
    else
    {
      const data = {"username" : username, "password": password, "email": correo, "name": name};
      try {
        const response = await axios.post(REGISTRO_URL, data, {
          headers: {
            "Content-type": "application/json",
          },
        });
        accessTokenSaver(setAuth, response, username);
        cleanFields();
        navigate(from, {replace: true})
      } catch (err) {
        if(!err?.response)
        {
          setErrorMessage("El servidor no responde!");
        }
        else if(err.response?.status == 403)
        {
          setErrorMessage(err.response?.data);
        }

      }
    }
  }



  return (
    <section ref={ref}>
      <div className="imgBx" alt="imgen de un faro">
        <img src={image} alt="imagenFaro"/>
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2 className="login">Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBx name">
              <span>Nombre</span>
              <input type="text" name="" value={name}  onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="inputBx apellido">
              <span>Correo</span>
              <input type="text" name="" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </div>
            <div className="inputBx username">
              <span>Nombre de usuario</span>
              <input type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="inputBx password">
              <span>Contraseña</span>
              <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="inputBx passwordrep">
              <span>Repetir contraseña</span>
              <input type="password" name="" value={passwordRep} onChange={(e) => setPasswordRep(e.target.value)}/>
            </div>
            {errorMessage && <p className={errorMessage ? "error" : "errorHidden"}> {errorMessage} </p>}
            <div className="inputBxRegistro boton">
              <input type="submit" value="Registarse" name=""/>
            </div>
          </form>
            
        </div>
      </div>
    </section>
  );
}
export default Registro;