import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const {auth} = useAuth();

  if (!auth.accessToken) {
    return <Navigate to="/login" replace state={{from: location}} />;
  }
  return children;
}

export default ProtectedRoute;
