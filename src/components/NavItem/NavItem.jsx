import React from "react";
import classes from "./navItem.module.css";

function NavItem({ children, icon, onClick, collapse}) {

  const collapseClass = (collapse?classes.collapse:"");

  return (
    <button className={`${classes.item} ${collapseClass}`} onClick={onClick} >
      <span className={`${classes.icon} ${collapseClass}`}>{icon}</span>
      {collapse? "":children}
    </button>
  );
}

export default NavItem;
