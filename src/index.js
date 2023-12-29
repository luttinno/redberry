import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MoreAbout from "./components/MoreAbout";
import AddBlogs from "./components/AddBlogs";

const router = createBrowserRouter([
  {
    path: "/redberry",
    element: <App />,
  },
  {
    path: "/more",
    element: <MoreAbout />,
  },
  {
    path: "/add-blog",
    element: <AddBlogs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
