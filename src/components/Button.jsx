import React from "react";
import "./button.css";


const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
];

const SIZES = ["btn--medium", "btn--large"];

function Button({ text, onClick, buttonStyle, buttonSize, icon }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {text}{icon}
    </button>
  );
}

export default Button;
