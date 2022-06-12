import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Eventos from "../pages/Eventos.jsx";


test("Eventos se esta renderizando", () => {
  const componente = render(<Eventos/>);
  const input = componente.queryByTestId("containerEventos");
  expect(input).toHaveClass("containerEventos");
});

