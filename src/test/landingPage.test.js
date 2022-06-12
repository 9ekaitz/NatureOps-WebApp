import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";


import LandingPage from "../pages/LandingPage.jsx";

test("Testear botones abrir y cerrar", () => {
  const componente = render(<LandingPage/>)
  const navbar = componente.queryByTestId("navbar");    
  const boxIcon = componente.queryByTestId("itxiNavbar");
  expect(navbar.className).toBe("nav__menu");  
  boxIcon.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(navbar.className).toBe("nav__menu");

});

