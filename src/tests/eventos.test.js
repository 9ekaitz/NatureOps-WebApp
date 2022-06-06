import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Eventos from "../components/Eventos";


test("Eventos se esta renderizando", () => {
  const componente = render(<Eventos/>);
  const input = componente.queryByTestId("containerEventos");
  expect(input).toHaveClass("containerEventos");
});

test("Testear botones abrir y cerrar Eventos", () => {
  const componente = render(<Eventos/>)
  const btnCerrar = componente.queryByTestId("botonCerrar");
  const btnAbrir = componente.queryByTestId("botonAbrir");
  const aside = componente.queryByTestId("asidea");
  expect(aside.className).toBe("cerrar");
  btnAbrir.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("abrir");
  btnCerrar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("cerrar");

});

