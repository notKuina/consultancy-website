// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the child component
  return children;
};

export default ProtectedRoute;
