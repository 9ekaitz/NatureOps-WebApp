import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.svg";
import { FiLogOut } from "react-icons/fi";

import NavItem from "../NavItem";
import styles from "./nav.module.css";

function Nav({ dataCenter, collapse, onClickOverlay }) {
  const {t} = useTranslation();
  const brand = collapse ? "" : "NATUREOPS";
  const renderNavItem = (item, index) => {
    return (
      <NavItem
        key={index}
        path={item.path}
        icon={item.icon}
        collapse={collapse}
      >
        {t(item.text)}
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
        <div className={styles.bottom}>
          <NavItem path="/logout" icon={<FiLogOut />} collapse={collapse}>
            {t("Dashboard.Nav.Logout")}
          </NavItem>
        </div>
      </aside>
      <div
        onClick={onClickOverlay}
        onKeyDown={onClickOverlay}
        role="button"
        tabIndex={0}
        className={`${styles.overlay} ${collapse ? styles.collapse : ""}`}
      ></div>
    </React.Fragment>
  );
}

export default Nav;
