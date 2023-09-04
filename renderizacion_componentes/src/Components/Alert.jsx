import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";

const Alert = ({ children, color }) => {
  return (
    <>
      <p className="alerta">
        <Badge bg={color}>{children}</Badge>
      </p>
    </>
  );
};

export default Alert;
