import React from "react";
// import { Link } from "react-router-dom";
import "./StepList.css";

function StepList({
  stepNumber = 0,
  details = "Details",
  active = false,
  to,
  element,
}) {
  return (
    <div className="step_list">
      <div className={`step_list-number ${active ? "active" : ""}`}>
        {stepNumber}
      </div>
      <div className="step_list-body">
        <div className="step_list-body-header">Step {stepNumber}</div>
        <div className="step_list-body-details">{details}</div>
      </div>
    </div>
  );
}

export default StepList;
