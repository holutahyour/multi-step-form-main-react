import React from "react";
import CheckBox from "../../../@Core/CheckBox";
import Heading from "../../../@Core/Heading";

function AddOns({ yearly, paymentYear, handleAddons , active}) {
  const addOns = [
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
    {
      label: "Customizable Profile",
      details: "Custom theme on your profile",
      price: 2,
    },
  ];

  return (
    <section data-active={active}>
      <Heading
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <div className="checkboxs">
        {addOns.map((x, index) => {
          return (
            <CheckBox
              key={index}
              label={x.label}
              details={x.details}
              amount={yearly ? x.price * paymentYear : x.price}
              paymentMode={yearly ? "yr" : "mo"}
              handleAddons={handleAddons}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AddOns;
