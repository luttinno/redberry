import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MoreAbout from "./components/MoreAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/more",
    element: <MoreAbout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
