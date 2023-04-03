import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "personal-info",
//         element: <PersonalInfo/>,
//       },
//       {
//         path: "select-plan",
//         element: <SelectPlan />,
//       },
//       {
//         path: "add-ons",
//         element: <AddOns />,
//       },
//       {
//         path: "summary",
//         element: <Summary />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
