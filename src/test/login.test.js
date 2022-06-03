import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render, fireEvent, fakeEvent, } from "@testing-library/react";
import { screen} from "@testing-library/dom";
import { mount } from "enzyme";

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
    
  const componente = render(<Login/>)
  const usernameLabel = componente.queryByTestId("username");
  fireEvent.change(usernameLabel, {target: {value:"esto es un test"}});
  expect(usernameLabel).toHaveAttribute("value", "esto es un test");

    
  const passwordLabel = componente.queryByTestId("contraseña");
  fireEvent.change(passwordLabel, {target: {value:"esto es un test contraseña"}});
  expect(passwordLabel).toHaveAttribute("value", "esto es un test contraseña");
     
})



test("ejecutar handle submit", () =>{

  /* TEST HAU APARTE UTZI DUGU */
  const componente = render(<Login/>)
  const inputAcceder = componente.queryByTestId("acceder");
  fireEvent.click(inputAcceder);
  /*const mockhandler = jest.fn();
    expect(mockhandler).toBeCalledTimes(1);*/

})