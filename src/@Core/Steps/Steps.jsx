import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button";
import StepList from "../StepList";
import "./Steps.css";

function Steps({ pages = [] }) {
  const [step, setStep] = useState(1);
  let handlePages = () => {
    setStep(step + 1);
    console.log(step);
  };
  return (
    <>
      <div className="steps">
        {pages.map((item, index) => {
          return (
            <StepList
              stepNumber={index + 1}
              details={item.details}
              active={step == index + 1}
            />
          );
        })}
      </div>
      <div className="step_details">
        {pages[step -1].element}
        <div className="step_details-actions">
          
          {step != pages.length ? (
            <Button onClick={handlePages}>Next Step</Button>
          ) : (
            ""
          )}

          {step == pages.length ? (
            <Button onClick={handlePages}>Confirm</Button>
          ) : (
            ""
          )}

          {step > 1 ? (
            <Button outline={true} borderless={true} onClick={() => setStep(step - 1)}>Go Back</Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Steps;
