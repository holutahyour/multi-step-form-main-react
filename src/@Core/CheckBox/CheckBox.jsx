import React from "react";
import "./CheckBox.css";

function CheckBox({ label = "checkbox", amount = 0, details, paymentMode }) {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span className="checkbox__check"></span>
      <span className="checkbox__label">
        <p className="checkbox__label-heading">{label}</p>
        <p className="checkbox__label-details">{details || ''}</p>
      </span>
      <p className="checkbox__payment-type">{`+$${amount}/${
        paymentMode || ""
      }`}</p>
    </label>
  );
}

export default CheckBox;
