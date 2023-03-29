import React, { useState } from "react";
import "./Toggle.css";

function Toggle({ fullBackgroundClr }) {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);

  let handleToggle = () => {
    setMonthly(!monthly)
    setYearly(!yearly)
  }

  return (
    <div className="toggle">
      <p data-color={monthly}>Monthly</p>
      <label className="toggle__label">
        <input type="checkbox" onClick={handleToggle} data-full-background-clr={fullBackgroundClr} />
        <span className="toggle__slider"></span>
      </label>
      <p data-color={yearly}>Yearly</p>
    </div>
  );
}

export default Toggle;
