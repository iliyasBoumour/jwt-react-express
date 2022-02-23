import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../utils/canAccess";

const Index = () => {
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth === "ROLE_USER" ? <Outlet /> : <Navigate to="/login" />;
};

export default Index;
