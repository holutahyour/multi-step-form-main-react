import React, { useState } from "react";
import "./Toggle.css";

function Toggle({ onClick, monthly, yearly, isFullBackgroundClr }) {
  return (
    <div className="toggle">
      <p data-color={monthly}>Monthly</p>
      <label className="toggle__label">
        <input
          type="checkbox"
          onClick={onClick}
          data-full-background-clr={isFullBackgroundClr}
        />
        <span className="toggle__slider"></span>
      </label>
      <p data-color={yearly}>Yearly</p>
    </div>
  );
}

export default Toggle;
