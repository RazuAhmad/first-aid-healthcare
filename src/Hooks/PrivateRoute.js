import React from "react";
import { Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const PrivateRoute = ({ children }) => {
  const { newUser } = UseAuth();
  return newUser?.email ? children : <Navigate to="/signIn" />;
};

export default PrivateRoute;
