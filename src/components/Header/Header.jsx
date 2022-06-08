import React from "react";
import Avatar from "boring-avatars";
import { FiMenu } from "react-icons/fi";
import { LightDarkToggle } from "react-light-dark-toggle";

import styles from "./header.module.css";

function Header({ username, role, menuOnClick, theme, themeToggle }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <FiMenu className={styles.iconButton} onClick={menuOnClick} />
      </div>
      <div className={styles.headerRight}>
        <LightDarkToggle isLight={theme} onToggle={themeToggle} />
        <div className={styles.user}>
          {`Hey, ${username}`}
          <span className={styles.role}>{role}</span>
        </div>
        <span className={styles.logo}>
          <Avatar
            size={48}
            name={username}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </span>
      </div>
    </header>
  );
}

export default Header;
