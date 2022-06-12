import React, {useRef} from "react";

import styles from "./modal.module.css";

function Modal({ children, show, setShow }) {
  const modal = useRef();

  const toggle = (e) => {
    if (e.target == modal.current) {
      setShow(false);
    }
  };

  return (
    <div
      ref={modal}
      onClick={toggle}
      onKeyDown={toggle}
      role="button"
      tabIndex={0}
      className={`${styles.modal} ${show ? "" : styles.hidden}`}
    >
      {children}
    </div>
  );
}

export default Modal;
