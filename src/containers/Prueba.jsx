import React from "react";
import Button from "../components/Button.jsx";
import { FaSave } from "react-icons/fa";

function Prueba() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Button text="Hello" buttonStyle="btn--danger--outline" buttonSize="btn--large" icon={<FaSave />}/>
    </div>
  );
}

export default Prueba;
