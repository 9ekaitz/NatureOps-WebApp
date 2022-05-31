import React from "react";

import logo from "../../images/logo.svg";

import NavItem from "../NavItem";
import styles from "./nav.module.css";

function Nav({ dataCenter, dataBottom, collapse, onClickOverlay }) {
  const brand = collapse ? "" : "NATUREOPS";
  const renderNavItem = (item, index) => {
    return (
      <NavItem
        key={index}
        onClick={item.onClick}
        icon={item.icon}
        collapse={collapse}
      >
        {item.text}
      </NavItem>
    );
  };

  return (
    <React.Fragment>
      <aside className={`${styles.nav} ${collapse ? styles.collapse : ""}`}>
        <div className={styles.top}>
          <img className={styles.logo} src={logo} alt="Logo" />
          {brand}
        </div>
        <div className={styles.center}>{dataCenter.map(renderNavItem)}</div>
        <div className={styles.bottom}>{dataBottom.map(renderNavItem)}</div>
      </aside>
      <div onClick={onClickOverlay} onKeyDown={onClickOverlay} className={`${styles.overlay} ${collapse ? styles.collapse : ""}`}></div>
    </React.Fragment>
  );
}

export default Nav;
