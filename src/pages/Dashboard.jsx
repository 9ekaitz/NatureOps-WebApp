import React, { useState } from "react";
import { Outlet } from "react-router";
import { ImNewspaper } from "react-icons/im";
import {
  MdEvent,
  MdPlace,
  MdAccountCircle,
  MdSpaceDashboard,
} from "react-icons/md";

import Nav from "../components/Nav";
import Header from "../components/Header";
import "../styles/dashboard.css";
import useAuth from "../hooks/useAuth";

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const {auth} = useAuth();
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

  return (
    <React.Fragment>
      <Header username={auth.userData.username} role="Admin" menuOnClick={toggleNav} />
      <Nav
        collapse={collapsed}
        onClickOverlay={toggleNav}
        dataCenter={navigationData}
      />
      <Outlet />
    </React.Fragment>
  );
}

export default DashBoard;
