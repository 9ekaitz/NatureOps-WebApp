import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth.accessToken) {
    return <Navigate to="/login" replace state={{from: location}} />;
  }
  return children;
}

export default ProtectedRoute;
