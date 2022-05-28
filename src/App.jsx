import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import LandingPage  from "./pages/LandingPage.jsx";
import Registro from "./pages/Registro.jsx";
import DashBoard from "./pages/Dashboard.jsx"; 
import Perfil from "./pages/Perfil.jsx"; 
import Prueba from "./pages/Prueba.jsx"; 

export function App() {

  return (
    <Router>      
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/dashboard" component={DashBoard}/>
        <Route exact path="/perfil" component={Perfil}/>
        <Route exact path="/prueba" component={Prueba}/>

        
        
        
      </Switch>
    </Router>
  );
}

