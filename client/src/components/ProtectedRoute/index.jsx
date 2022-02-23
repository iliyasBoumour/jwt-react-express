import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../utils/canAccess";

const Index = () => {
  const isAuth = useAuth();
  const can = isAuth === "ROLE_USER" || isAuth === "ROLE_ADMIN";
  console.log(isAuth);
  return can ? <Outlet /> : <Navigate to="/login" />;
};

export default Index;
