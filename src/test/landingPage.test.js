import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { getByTestId, render, fireEvent, fakeEvent, ReactDOM } from "@testing-library/react";


import LandingPage from "../components/LandingPage.jsx";

test('Testear botones abrir y cerrar', () => {
    const componente = render(<LandingPage/>)
    const navbar = componente.queryByTestId("navbar");
    
    //ReactDOM.createRoot(componente);
    
    const boxIcon = componente.queryByTestId("itxiNavbar");
    expect(navbar.className).toBe("nav__menu");
    //componente.find('navbar').simulate('click');
    // Test second render and componentDidUpdate
    
    boxIcon.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    expect(navbar.className).toBe("nav__menu");

});

