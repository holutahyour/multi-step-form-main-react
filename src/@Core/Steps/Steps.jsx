import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import Button from "../Button";
import StepList from "../StepList";
import "./Steps.css";

function Steps({ allPages = [], finalPage, isComplete, handleIsComplete }) {
  const STEP_INCREMENT = 1;
  const ARRAY_DECREMENT = 1;
  const [step, setStep] = useState(1);

  const pages = [...allPages];

  let handleNextPages = () => setStep(step + STEP_INCREMENT);
  let handlePrevPages = () => setStep(step - STEP_INCREMENT);
  const handlePage = (element, index) => {
    return step === index + STEP_INCREMENT
      ? React.cloneElement(element, {
          key: index,
          active: true,
        })
      : React.cloneElement(element, {
        key: index,
      });
  };
  return (
    <>
      <div className="steps">
        {pages.map((item, index) => {
          return (
            <StepList
              key={index}
              stepNumber={index + STEP_INCREMENT}
              details={item.details}
              active={step == index + STEP_INCREMENT}
            />
          );
        })}
      </div>
      <div className="step_details">
        {!isComplete ? (
          <>
            {pages.map((page, index) => handlePage(page.element, index))}

            <div className="step_details-actions">
              {step !== pages.length ? (
                <Button onClick={handleNextPages}>Next Step</Button>
              ) : (
                ""
              )}

              {step == pages.length ? (
                <Button onClick={handleIsComplete} color="var(--purplish-blue)">
                  Confirm
                </Button>
              ) : (
                ""
              )}

              {step > ARRAY_DECREMENT ? (
                <Button outline borderless onClick={handlePrevPages}>
                  Go Back
                </Button>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          finalPage
        )}
      </div>
    </>
  );
}

export default Steps;
