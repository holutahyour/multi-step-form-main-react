import React from "react";
import "./CheckBox.css";

function CheckBox({ label = "checkbox", amount:price = 0, details, paymentMode, handleAddons }) {
  return (
    <label className="checkbox">
      <input type="checkbox" onClick={(e) => {
        handleAddons({label,details,price,paymentMode, checked:e.target.checked})
      }} />
      <span className="checkbox__check"></span>
      <span className="checkbox__label">
        <p className="checkbox__label-heading">{label}</p>
        <p className="checkbox__label-details">{details || ''}</p>
      </span>
      <p className="checkbox__payment-type">{`+$${price}/${
        paymentMode || ""
      }`}</p>
    </label>
  );
}

export default CheckBox;
