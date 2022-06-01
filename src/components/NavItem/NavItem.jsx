import React from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem({ children, icon, path, collapse }) {
  return (
    <Link
      className={`${styles.item} ${collapse ? styles.collapse : ""}`}
      to={path}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{children}</span>
    </Link>
  );
}

export default NavItem;
