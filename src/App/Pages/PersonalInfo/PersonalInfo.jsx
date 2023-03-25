import React from "react";
import InputBox from "../../../@Core/InputBox/InputBox";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="personal-info">
      <div className="personal-info__header">
        <h1 className="personal-info__header-title">Personal info</h1>
        <p className="personal-info__info__header-sub-title">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="personal-info__form">
        <InputBox label="Name" placeholder="e.g. Stephen King"/>
        <InputBox label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com" />
        <InputBox label="Phone Number" type="phone" placeholder={"e.g. +1 234 567 890"} />
      </div>
    </div>
  );
}

export default PersonalInfo;
