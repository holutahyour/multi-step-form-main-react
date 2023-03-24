import React from "react";
import './InputBox.css'

function InputBox({ type = "text", label = "label", name = "", id = "", error="this field is required" }) {
  return (
    <div className="form-group">
      <label className="form-group__label">{label}</label>
      <p className="form-group__error">error</p>
      <input type={type} name={name} id={id} />
    </div>
  );
}

export default InputBox;
