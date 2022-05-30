import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render } from "@testing-library/react";
import { screen} from "@testing-library/dom";

import Login from "../components/Login.jsx";

test("el componente se esta renderizando", () => {
  const componente = render(<Login/>)
  const usernameLabel = componente.getByText("Nombre de usuario");
  const passwordLabel = componente.getByText("Contraseña");

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

})