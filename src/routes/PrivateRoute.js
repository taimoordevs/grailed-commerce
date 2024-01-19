import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ component: component, ...rest }) => {
  const token = localStorage.getItem("user_ID");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
