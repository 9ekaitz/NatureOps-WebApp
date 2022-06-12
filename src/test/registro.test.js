import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Registro from "../pages/Registro.jsx";

test("el componente se esta renderizando", () => {
  const componente = render(<Registro/>);
  const input = componente.queryByTestId("inputa");
  expect(input).toHaveAttribute("name", "");
  expect(input).toHaveAttribute("type", "text");
})