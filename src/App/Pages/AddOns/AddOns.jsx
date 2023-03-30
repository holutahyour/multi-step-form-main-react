import React from "react";
import CheckBox from "../../../@Core/CheckBox";
import Heading from "../../../@Core/Heading";

function AddOns({ yearly, paymentYear }) {
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
    <section>
      <Heading
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <div className="checkboxs">
        {addOns.map((x) => {
          return (
            <CheckBox
              label={x.label}
              details={x.details}
              amount={yearly ? x.price * paymentYear : x.price}
              paymentMode={yearly ? 'yr' : 'mo'}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AddOns;
