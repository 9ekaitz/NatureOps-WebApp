import React, { useState } from "react";
import { Outlet } from "react-router";
import { FiLogOut } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import {
  MdEvent,
  MdPlace,
  MdAccountCircle,
  MdSpaceDashboard,
} from "react-icons/md";

import Nav from "../components/Nav";
import Header from "../components/Header";
import "../styles/dashboard.css"

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNav = () => {
    setCollapsed((prev) => !prev);
  };

  const navigationData = [
    {
      text: "Resumen",
      path: "",
      icon: <MdSpaceDashboard />,
    },
    {
      text: "Noticias",
      path: "noticias",
      icon: <ImNewspaper />,
    },
    {
      text: "Eventos",
      path: "eventos",
      icon: <MdEvent />,
    },
    {
      text: "Sitios",
      path: "sitios",
      icon: <MdPlace />,
    },
    {
      text: "Perfil",
      path: "perfil",
      icon: <MdAccountCircle />,
    },
  ];

  const navFooterData = [
    {
      text: "Cerrar Sesion",
      path: "/logout",
      icon: <FiLogOut />,
    },
  ];

  return (
    <React.Fragment>
      <Header username="Oihane" role="Admin" menuOnClick={toggleNav} />
      <Nav
        collapse={collapsed}
        onClickOverlay={toggleNav}
        dataCenter={navigationData}
        dataBottom={navFooterData}
      />
      <Outlet />
    </React.Fragment>
  );
}

export default DashBoard;
