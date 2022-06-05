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
import useAuth from "../hooks/useAuth";

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const {auth} = useAuth();
  const toggleNav = () => {
    setCollapsed((prev) => !prev);
  };

  const navigationData = [
    {
      text: "Dashboard.Nav.Overview",
      path: "",
      icon: <MdSpaceDashboard />,
    },
    {
      text: "Dashboard.Nav.News",
      path: "noticias",
      icon: <ImNewspaper />,
    },
    {
      text: "Dashboard.Nav.Events",
      path: "eventos",
      icon: <MdEvent />,
    },
    {
      text: "Dashboard.Nav.Places",
      path: "sitios",
      icon: <MdPlace />,
    },
    {
      text: "Dashboard.Nav.Profile",
      path: "perfil",
      icon: <MdAccountCircle />,
    },
  ];

  return (
    <div id="dashboard">
      <Header username={auth.userData.username} role="Admin" menuOnClick={toggleNav} />
      <Nav
        collapse={collapsed}
        onClickOverlay={toggleNav}
        dataCenter={navigationData}
      />
      <Outlet />
    </div>
  );
}

export default DashBoard;
