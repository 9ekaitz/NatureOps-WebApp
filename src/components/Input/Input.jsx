import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./input.module.css";

const TYPES = ["text", "password", "email", "submit"];

function Input({ reference, type, placeholder, value, onChange, label }) {
  const { t, i18n } = useTranslation();
  const checkInputType = TYPES.includes(type) ? type : TYPES[0];

  return (
    <div ref={reference} className={`${styles.inputBx}`}>
      {checkInputType === "submit" ? "" : <span>{t(label)}</span>}
      <input
        type={checkInputType}
        placeholder={placeholder}
        name=""
        value={i18n.exists(value) ? t(value) : value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
