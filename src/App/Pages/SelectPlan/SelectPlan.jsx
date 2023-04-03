import React from "react";
import "./SelectPlan.css";
import PriceCard from "../../../@Core/PriceCard";
import InputBox from "../../../@Core/InputBox";
import Toggle from "../../../@Core/Toggle";
import Heading from "../../../@Core/Heading";

function SelectPlan({ handleToggle, monthly, yearly, paymentYear, active }) {
  const priceCards = [
    {
      title: "Arcade",
      price: 9,
      icon: "images/icon-arcade.svg",
    },
    {
      title: "Advanced",
      price: 12,
      icon: "images/icon-advanced.svg",
    },
    {
      title: "Pro",
      price: 15,
      icon: "images/icon-pro.svg",
    },
  ];

  return (
    <section data-active={active}>
      <Heading
        title="Select Plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <div className="plans">
        {priceCards.map((x, index) => (
          <PriceCard
            key={index}
            title={x.title}
            price={yearly ? x.price * paymentYear : x.price}
            icon={x.icon}
          />
        ))}
      </div>
      <div>
        <Toggle
          onClick={handleToggle}
          monthly={monthly}
          yearly={yearly}
          isFullBackgroundClr
        />
      </div>
    </section>
  );
}

export default SelectPlan;
