import React from "react";
import './SelectPlan.css'
import PriceCard from "../../../@Core/PriceCard";
import InputBox from "../../../@Core/InputBox";
import Toggle from "../../../@Core/Toggle";

function SelectPlan() {
  return (
    <section>
      <div className="heading_group">
        <h1 className="heading__title">Select Plan</h1>
        <p className="heading__sub-title">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="plans">
        <PriceCard title="Arcade" price={9} iconBackgroundClr='var(--orange)' active />
        <PriceCard title="Advanced" price={12} iconBackgroundClr='var(--strawberry-red)' />
        <PriceCard title="Pro" price={15} iconBackgroundClr='var(--purplish-blue)' />
      </div>
      <div>
        <Toggle fullBackgroundClr />
      </div>
    </section>
  );
}

export default SelectPlan;
