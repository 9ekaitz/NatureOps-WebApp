import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import LandingPage  from "./components/LandingPage.jsx";
import Registro from "./components/Registro.jsx";
import DashBoard from "./components/Dashboard.jsx"; 
import SubirFoto from "./components/SubirFoto.jsx"
import CrearNoticia from "./components/CrearNoticia.jsx"
import CrearEvento from "./components/CrearEvento.jsx"
import Evento from "./components/Evento.jsx"
import Noticias from "./components/Noticias.jsx"
import Foto from "./components/SacarFoto.jsx"


export function App() {

  return (
    <Router>      
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/dashboard" component={DashBoard}/>
        <Route exact path="/subirFoto" component={SubirFoto}/>
        <Route exact path="/crearNoticia" component={CrearNoticia}/>
        <Route exact path="/crearEvento" component={CrearEvento}/>
        <Route exact path="/evento" component={Evento}/>
        <Route exact path="/noticias" component={Noticias}/>
        <Route exact path="/camara" component={Foto}/>


      </Switch>
    </Router>
  );
}

