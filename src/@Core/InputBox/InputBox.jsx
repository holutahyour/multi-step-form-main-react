import React, { useState } from "react";
import "./InputBox.css";

function InputBox({
  type = "text",
  label = "label",
  name = "",
  id = "",
  placeholder,
  error = "This field is required",
}) {
  const [hasError, setHasError] = useState(false);

  const handleValdation = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "") {
      setHasError(true);
      console.log(e.target.value, "error");
    } else {
      setHasError(false);
      console.log(e.target.value, "no error");
    }
  };

  return (
    <div className="form-group">
      <label className="form-group__label">{label}</label>
      {hasError ? <p className="form-group__error">{error}</p> : ""}
      <input
        type={type}
        name={name}
        id={id}
        onBlur={handleValdation}
        placeholder={placeholder ?? label}
      />
    </div>
  );
}

export default InputBox;
