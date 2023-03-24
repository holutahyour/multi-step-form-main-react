import React from "react";
import InputBox from "../../../@Core/InputBox/InputBox";

function PersonalInfo() {
  return (
    <>
      <h1>Personal info</h1>
      <p> Please provide your name, email address, and phone number.</p>
      <div className="personal-info__form">
        <InputBox label="Name" />
        <InputBox label="Email" />
        <InputBox label="Phone Number"/>
      </div>
    </>
  );
}

export default PersonalInfo;
