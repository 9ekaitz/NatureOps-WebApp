import React from "react";

import logo from "../../images/logo.svg";

import NavItem from "../NavItem";
import classes from "./nav.module.css";

function Nav({ dataCenter, dataBottom, collapse }) {
  const brand = collapse ? "" : "NATUREOPS";

  return (
    <aside className={`${classes.nav} ${collapse ? classes.collapse : ""}`}>
      <div className={classes.top}>
        <img className={classes.logo} src={logo} alt="Logo" />
        {brand}
      </div>
      <div className={classes.center}>
        {dataCenter.map((item, index) => (
          <NavItem
            key={index}
            onClick={item.onClick}
            icon={item.icon}
            collapse={collapse}
          >
            {item.text}
          </NavItem>
        ))}
      </div>
      <div className={classes.bottom}>
        {dataBottom.map((item, index) => (
          <NavItem
            key={index}
            onClick={item.onClick}
            icon={item.icon}
            collapse={collapse}
          >
            {item.text}
          </NavItem>
        ))}
      </div>
    </aside>
  );
}

export default Nav;
