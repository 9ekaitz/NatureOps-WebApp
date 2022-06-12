import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent} from "@testing-library/react";

import Login from "../pages/Login.jsx";

test("el componente se esta renderizando", () => {
  const componente = render(<Login/>)

  const inputUsername = componente.queryByTestId("username");
  expect(inputUsername).toHaveAttribute("type", "text");
  expect(inputUsername).toHaveAttribute("value", "");

  const inputContraseña = componente.queryByTestId("contraseña");
  expect(inputContraseña).toHaveAttribute("type", "password");
  expect(inputContraseña).toHaveAttribute("value", "");

  const inputAcceder = componente.queryByTestId("acceder");
  expect(inputAcceder).toHaveAttribute("type", "submit");

})

test("testear el form", () =>{
    
  const componente = render(<Login/>)
  const usernameLabel = componente.queryByTestId("username");
  fireEvent.change(usernameLabel, {target: {value:"esto es un test"}});
  expect(usernameLabel).toHaveAttribute("value", "esto es un test");

    
  const passwordLabel = componente.queryByTestId("contraseña");
  fireEvent.change(passwordLabel, {target: {value:"esto es un test contraseña"}});
  expect(passwordLabel).toHaveAttribute("value", "esto es un test contraseña");
     
})