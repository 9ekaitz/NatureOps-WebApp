import React from "react";
import styles from "./navItem.module.css";

function NavItem({ children, icon, onClick, collapse }) {
  const collapseClass = collapse ? styles.collapse : "";

  return (
    <button className={`${styles.item} ${collapseClass}`} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{children}</span>
    </button>
  );
}

export default NavItem;
