import React from "react";
import Button from "react-bootstrap/Button";
import "./CounterControl.css";

const countercontrol = props => {
  return (
    <div className="ControlButton">
      <Button variant="primary">{props.label}</Button>
    </div>
  );
};

export default countercontrol;
