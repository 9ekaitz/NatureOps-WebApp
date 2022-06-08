import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import useAuth from "../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { onLogout } = useAuth();
  useEffect(() => {
    onLogout();
    navigate("/", { replace: true });
  }, []);

  return <div data-testId="logout">Login out th user</div>;
};

export default Logout;
