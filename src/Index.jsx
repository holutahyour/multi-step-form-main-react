import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App/App";
import AddOns from "./App/Pages/AddOns";
import PersonalInfo from "./App/Pages/PersonalInfo";
import SelectPlan from "./App/Pages/SelectPlan";
import Summary from "./App/Pages/Summary";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "personal-info",
        element: <PersonalInfo/>,
      },
      {
        path: "select-plan",
        element: <SelectPlan />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
