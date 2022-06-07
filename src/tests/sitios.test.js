import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Sitios from "../components/Sitios";

test("Sitios se esta renderizando", () => {
  const componente = render(<Sitios/>);
  const input = componente.queryByTestId("container");
  expect(input).toHaveClass("container");
})

test("Testear botones abrir y cerrar Sitios", () => {
  const componente = render(<Sitios/>)
  const btnCerrar = componente.queryByTestId("botonCerrar");
  const btnAbrir = componente.queryByTestId("botonAbrir");
  const aside = componente.queryByTestId("asidea");
  expect(aside.className).toBe("cerrar");
  btnAbrir.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("abrir");
  btnCerrar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("cerrar");

});