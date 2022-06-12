import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Evento from "../pages/Evento.jsx";
import CrearEvento from "../pages/CrearEvento.jsx"
import CrearNoticia from "../pages/CrearNoticia.jsx"
import SubirImagen from "../pages/SubirFoto.jsx";

test("SubirImagen se esta renderizando", () => {
  const componente = render(<SubirImagen/>);
  const input = componente.queryByTestId("subirImagen");
  expect(input).toHaveClass("claseSubirImagen");
})

test("Evento se esta renderizando", () => {
  const componente = render(<Evento/>);
  const input = componente.queryByTestId("eventoa");
  expect(input).toHaveClass("claseEvento");
})

test("CrearEvento se esta renderizando", () => {
  const componente = render(<CrearEvento/>);
  const input = componente.queryByTestId("eventoaSortu");
  expect(input).toHaveClass("claseSubirImagen");
})

test("CrearNoticia se esta renderizando", () => {
  const componente = render(<CrearNoticia/>);
  const input = componente.queryByTestId("noticiaSortu");
  expect(input).toHaveClass("claseSubirImagen");
})