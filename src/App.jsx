import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./containers/Login.jsx";
import LandingPage  from "./containers/LandingPage.jsx";
import Registro from "./containers/Registro.jsx";
import DashBoard from "./containers/Dashboard.jsx"; 
import Perfil from "./containers/Perfil.jsx"; 
import Prueba from "./containers/Prueba.jsx"; 

/*import Sidebar from "./components/componentsDashBoard/Sidebar.jsx"*/

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

