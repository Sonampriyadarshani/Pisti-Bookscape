import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  if (!loggedInUser) {
    return <Navigate to="/register" replace />; // Redirect to register page if not logged in
  }

  return children;
};

export default ProtectedRoute;
