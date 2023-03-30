import { useState } from "react";
import { Outlet } from "react-router-dom";
import Steps from "../@Core/Steps/Steps";
import StepList from "../@Core/Steps/Steps";
import "./App.css";
import AddOns from "./Pages/AddOns";
import PersonalInfo from "./Pages/PersonalInfo";
import SelectPlan from "./Pages/SelectPlan";
import Summary from "./Pages/Summary";
function App() {
  const PAYMENT_YEAR = 10;

  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);

  let handleToggle = () => {
    setMonthly(!monthly);
    setYearly(!yearly);
  };

  return (
    <main className="app">
      <Steps
        pages={[
          {
            details: "Your Info",
            element: <PersonalInfo />,
            to: "personal-info",
          },
          {
            details: "Select Plan",
            element: (
              <SelectPlan
                handleToggle={handleToggle}
                monthly={monthly}
                yearly={yearly}
                paymentYear={PAYMENT_YEAR}
              />
            ),
            to: "select-plan",
          },
          {
            details: "Add-Ons",
            element: <AddOns yearly={yearly} paymentYear={PAYMENT_YEAR} />,
            to: "add-ons",
          },
          {
            details: "Summary",
            element: <Summary />,
            to: "summary",
          },
        ]}
      />
    </main>
  );
}

export default App;
