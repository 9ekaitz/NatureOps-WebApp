import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import LandingPage  from "./components/LandingPage.jsx";
import Registro from "./components/Registro.jsx";
import DashBoard from "./components/Dashboard.jsx"; 
import Sitios from "./components/Sitios.jsx"; 

/*import Sidebar from "./components/componentsDashBoard/Sidebar.jsx"*/

export function App() {

  return (
    <Router>      
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/dashboard" component={DashBoard}/>
        <Route exact path="/sitios" component={Sitios}/>

        
        
        
      </Switch>
    </Router>
  );
}

