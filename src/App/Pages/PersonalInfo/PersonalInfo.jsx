import React from "react";
import InputBox from "../../../@Core/InputBox/InputBox";
import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <section>
      <div className="heading_group">
        <h1 className="heading__title">Personal info</h1>
        <p className="heading__sub-title">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="personal-info__form">
        <InputBox label="Name" placeholder="e.g. Stephen King"/>
        <InputBox label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com" />
        <InputBox label="Phone Number" type="phone" placeholder={"e.g. +1 234 567 890"} />
      </div>
    </section>
  );
}

export default PersonalInfo;
