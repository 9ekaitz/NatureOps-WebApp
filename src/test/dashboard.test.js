import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { getByTestId, render, fireEvent, fakeEvent, ReactDOM } from "@testing-library/react";

import Dashboard from "../components/Dashboard";
import Aside from "../components/componentsDashBoard/Aside"

test("Dashboard se esta renderizando", () => {
  const componente = render(<Dashboard/>);
  const input = componente.queryByTestId("dashboarda");
  expect(input).toHaveClass("container");
})

test("Testear botones abrir y cerrar Dashboard", () => {
  const componente = render(<Dashboard/>)
  const btnCerrar = componente.queryByTestId("botonCerrar");
  const btnAbrir = componente.queryByTestId("botonAbrir");
  const aside = componente.queryByTestId("asidea");
  expect(aside.className).toBe("cerrar");
  btnAbrir.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("abrir");
  btnCerrar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("cerrar");

});

/********************************************************/
test("Aside se esta renderizando", () => {
  const componente = render(<Aside/>);
  const input = componente.queryByTestId("asideClass");
  expect(input).toHaveClass("ezkerra");
})

test("Testear botones abrir y cerrar Aside", () => {
  const componente = render(<Aside/>)
  const btnCerrar = componente.queryByTestId("botonCerrar");
  const btnAbrir = componente.queryByTestId("botonAbrir");
  const aside = componente.queryByTestId("asidea");
  expect(aside.className).toBe("cerrar");
  btnAbrir.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("abrir");
  btnCerrar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("cerrar");

});