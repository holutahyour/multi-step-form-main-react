import { useState } from "react";
// import { Outlet } from "react-router-dom";
import Steps from "../@Core/Steps/Steps";
import StepList from "../@Core/Steps/Steps";
import "./App.css";
import AddOns from "./Pages/AddOns";
import FinalPage from "./Pages/FinalPage";
import PersonalInfo from "./Pages/PersonalInfo";
import SelectPlan from "./Pages/SelectPlan";
import Summary from "./Pages/Summary";
function App() {
  const PAYMENT_YEAR = 10;

  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const [addOns, setAddOns] = useState([]);
  const [isComplete, setIsComplete] = useState(false)

  const handleToggle = () => {
    setMonthly(!monthly);
    setYearly(!yearly);
  };
  

  const handleAddons = (addOn) => {
    if (addOn.checked) {
      setAddOns([...addOns, addOn]);
    } else {
      let filteredAddOns = addOns.filter((x) => x.label !== addOn.label);
      setAddOns([...filteredAddOns]);
    }
  };
  
  const handleIsComplete = () => setIsComplete(!isComplete)

  return (
    <main className="app">
      <Steps
        allPages={[
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
            element: (
              <AddOns
                yearly={yearly}
                paymentYear={PAYMENT_YEAR}
                handleAddons={handleAddons}
              />
            ),
            to: "add-ons",
          },
          {
            details: "Summary",
            element: <Summary yearly={yearly} paymentYear={PAYMENT_YEAR} addOns={addOns} />,
            to: "summary",
          },
        ]}
        finalPage={<FinalPage />}
        isComplete={isComplete}
        handleIsComplete={handleIsComplete}
      />
    </main>
  );
}

export default App;
