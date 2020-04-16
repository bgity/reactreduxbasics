import React from "react";
import "./CounterOutput.css";

const counteroutput = props => {
  return <div className="CounterOutput">{props.counterval}</div>;
};

export default counteroutput;
