import React from "react";
import styles from "./button.module.css";

const STYLES = [
  "btn--primary--solid",
  "btn--secondary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--secondary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline",
];

const SIZES = ["btn--medium", "btn--large"];

function Button({ children, onClick, buttonStyle, buttonSize, icon }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
    >
      {children}
      {icon}
    </button>
  );
}

export default Button;
