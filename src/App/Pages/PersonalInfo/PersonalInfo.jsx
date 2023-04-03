import React from "react";
import Heading from "../../../@Core/Heading";
import InputBox from "../../../@Core/InputBox/InputBox";
import "./PersonalInfo.css";

function PersonalInfo({active}) {
  return (
    <section data-active={active}>      
      <Heading title="Personal info" subTitle="Please provide your name, email address, and phone number." />
      <div className="personal-info__form">
        <InputBox label="Name" placeholder="e.g. Stephen King"/>
        <InputBox label="Email Address" type="email" placeholder="e.g. stephenking@lorem.com" />
        <InputBox label="Phone Number" type="phone" placeholder={"e.g. +1 234 567 890"} />
      </div>
    </section>
  );
}

export default PersonalInfo;
