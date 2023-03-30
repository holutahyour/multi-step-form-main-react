import React from "react";
import "./SelectPlan.css";
import PriceCard from "../../../@Core/PriceCard";
import InputBox from "../../../@Core/InputBox";
import Toggle from "../../../@Core/Toggle";
import Heading from "../../../@Core/Heading";

function SelectPlan({ handleToggle, monthly, yearly, paymentYear }) {
  const priceCards = [
    {
      title: "Arcade",
      price: 9,
      iconBackgroundClr: "var(--orange)",
    },
    {
      title: "Advanced",
      price: 12,
      iconBackgroundClr: "var(--strawberry-red)",
    },
    {
      title: "Pro",
      price: 15,
      iconBackgroundClr: "var(--purplish-blue)",
    },
  ];

  return (
    <section>
      <Heading
        title="Select Plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <div className="plans">
        {priceCards.map((x) => (
          <PriceCard
            title={x.title}
            price={yearly ? x.price * paymentYear : x.price}
            iconBackgroundClr={x.iconBackgroundClr}
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
