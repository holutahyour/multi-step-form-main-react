import React from "react";
import "./Button.css";
function Button({ label = "button", type = "button", outline = false, borderless = false, children, onClick }) {
  return (
    <button className="" type={type} data-outline={outline} data-borderless={borderless} onClick={onClick}>
      {children ? children : label}
    </button>
  );
}

export default Button;
