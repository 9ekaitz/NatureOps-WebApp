import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

/** DASHBOARD **/
import DashBoard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Overview from "../pages/Overview";
import Perfil from "../pages/Perfil";
import Prueba from "../pages/Prueba";
import Registro from "../pages/Registro";
//import Header from "../pages/Header";

/*** dashboard-en renderizazio berria ***/
import {BrowserRouter as Router} from 'react-router-dom';

test('DASHBOARD TEST: Renderizatu, lightDarkBotoia, toggleNavBotoia', async () => {

    /** Renderizatzen duela konprobatu **/
    const componente = render(
        <Router>
        <DashBoard />
        </Router>,
    );
    const claseDashboard = componente.queryByTestId("dashboard");
    expect(claseDashboard).toHaveAttribute("id");
    
    /** LightDark botoia konprobatu **/ 
    const claseDash = componente.queryByTestId("dashboard");
    const btnToggle = componente.queryByTestId("lightDarkBotoia");
    expect(claseDash).toHaveClass("light");
    fireEvent.click(btnToggle);
    expect(claseDash.className).toBe("dark dashboard");
    fireEvent.click(btnToggle);
    expect(claseDash).toHaveClass("light");

    /** Menu Toggle botoia **/
    const btnMenu = componente.queryByTestId("menuBotoia");
    fireEvent.click(btnMenu);
});

test("El LandingPage se esta renderizando", () => {
    const componente = render(<LandingPage/>);
    const claseLandingPage = componente.queryByTestId("landingPage");
    expect(claseLandingPage).toHaveAttribute("id");
})

test("El Login se esta renderizando", () => {
    const componente = render(<Login/>);
    const claseLogin = componente.queryByTestId("login");
    expect(claseLogin).toHaveAttribute("id");
})

/*data-testid=claseLandingPage
test("El Dashboard se esta renderizando", () => {

    
    const componente = render(<DashBoard/>);
    const claseDashboard = componente.queryByTestId("dashboard");
    expect(claseDashboard).toHaveAttribute("id");
})

test("El Login se esta renderizando", () => {
    const componente = render(<Login/>);
    const claseLogin = componente.queryByTestId("login");
    expect(claseLogin).toHaveAttribute("id");
})

test("El Logout se esta renderizando", () => {
    const componente = render(<Logout/>);
    const claseLogout = componente.queryByTestId("logout");
    expect(claseLogout).toHaveAttribute("id");
})

test("El Overview se esta renderizando", () => {
    const componente = render(<Overview/>);
    const claseOverview = componente.queryByTestId("overview");
    expect(claseOverview).toHaveAttribute("id");
})

test("El Perfil se esta renderizando", () => {
    const componente = render(<Perfil/>);
    const clasePerfil = componente.queryByTestId("perfil");
    expect(clasePerfil).toHaveClass("containerPerfil");
})

test("La Prueba se esta renderizando", () => {
    const componente = render(<Prueba/>);
    const clasePrueba = componente.queryByTestId("prueba");
    expect(clasePrueba).toHaveAttribute("style");
})

test("El Registro se esta renderizando", () => {
    const componente = render(<Registro/>);
    const claseRegistro = componente.queryByTestId("registro");
    expect(claseRegistro).toHaveAttribute("id");
})

/**DASHBOARD**/


