import React from "react";
// import { Link } from "react-router-dom";
import './Summary.css'
import Heading from "../../../@Core/Heading";

function Summary({ yearly, paymentYear, addOns, active }) {
  const summary = {
    plan: {
      title: "Arcade",
      price: 9,
      iconBackgroundClr: "var(--orange)",
    },
    addOns: [
      {
        label: "Online service",
        details: "Access to multiplayer games",
        price: 1,
      },
      {
        label: "Larger storage",
        details: "Extra 1TB of cloud save",
        price: 2,
      },
    ],
  };

  const handleTotalPrice = (addOns) => {
    return (
      summary.plan.price +
      addOns.reduce((total, element) => {
        return total + element.price;
      }, 0)
    );
  };

  return (
    <section data-active={active}>
      <Heading
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming."
      />
      <div className="summary">
        <div className="summary__plan">
          <p className="summary__plan-title">{`${summary.plan.title} ${yearly ? "(yearly)" : "(monthly)"}`}</p>
          <p className="summary__plan-price">
          +${yearly
              ? `${summary.plan.price * paymentYear}/yr`
              : `${summary.plan.price}/mo`}
          </p>
        </div>
        <div className="summary__addons">
          {addOns.map((addOn,index) => (
            <div key={index} className="summary__addon">
              <p className="summary__addon-label">{addOn.label}</p>
              <p className="summary__addon-price">
                +${yearly
                  ? `${addOn.price}/yr`
                  : `${addOn.price}/mo`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="summary__total">
        <p className="summary__total-label">{`Total (per ${yearly ? "year" : "month"})`}</p>
        <p className="summary__total-price">
        +${yearly
            ? `${handleTotalPrice(addOns) * paymentYear}/yr`
            : `${handleTotalPrice(addOns)}/mo`}
        </p>
      </div>
    </section>
  );
}

export default Summary;
