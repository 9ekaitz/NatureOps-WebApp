import React from "react";

import styles from "./floatingButton.module.css";

function FloatingButton({children, handleClick}) {
  return <button onClick={handleClick} className={styles.floatingButton}>{children}</button>;
}

export default FloatingButton;
