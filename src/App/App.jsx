import { Outlet } from "react-router-dom";
import Steps from "../@Core/Steps/Steps";
import StepList from "../@Core/Steps/Steps";
import "./App.css";
import AddOns from "./Pages/AddOns";
import PersonalInfo from "./Pages/PersonalInfo";
import SelectPlan from "./Pages/SelectPlan";
import Summary from "./Pages/Summary";
function App() {
  return (
    <main className="app">
      <Steps
        pages={[
          {
            details: "Your Info",
            element: <PersonalInfo />,
            to: 'personal-info',
          },
          {
            details: "Select Plan",
            element: <SelectPlan />,
            to: 'select-plan',
          },
          {
            details: "Add-Ons",
            element: <AddOns />,
            to: 'add-ons',
          },
          {
            details: "Summary",
            element: <Summary />,
            to: 'summary',
          },
        ]}
      />
    </main>
  );
}

export default App;
