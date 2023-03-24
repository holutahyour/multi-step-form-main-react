import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
        <div>
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)}>Back</button>
          ) : (
            ""
          )}
          {step != pages.length ? (
            <button onClick={handlePages}>Next</button>
          ) : (
            ""
          )}

          {step == pages.length ? (
            <button onClick={handlePages}>Confirm</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Steps;
