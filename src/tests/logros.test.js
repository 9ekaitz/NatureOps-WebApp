import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Logros from "../components/Logros";

test("Logros se esta renderizando", () => {
  const componente = render(<Logros/>);
  const input = componente.queryByTestId("containerLogros");
  expect(input).toHaveClass("containerLogros");
})

test("Testear botones abrir y cerrar Logros", () => {
  const componente = render(<Logros/>)
  const btnCerrar = componente.queryByTestId("botonCerrar");
  const btnAbrir = componente.queryByTestId("botonAbrir");
  const aside = componente.queryByTestId("asidea");
  expect(aside.className).toBe("cerrar");
  btnAbrir.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("abrir");
  btnCerrar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
  expect(aside.className).toBe("cerrar");

});