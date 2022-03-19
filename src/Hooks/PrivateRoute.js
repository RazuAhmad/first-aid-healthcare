import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const PrivateRoute = ({ children }) => {
  const { newUser, isLoading } = UseAuth();

  if (isLoading) {
    return (
      <Spinner
        style={{ textAlign: "center" }}
        animation="border"
        variant="danger"
      />
    );
  }

  return newUser?.email ? children : <Navigate to="/signIn" />;
};

export default PrivateRoute;
