import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./layout/navbar";
import Layout from "./layout/layout";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path : "",
      element : <Index />
    },
    
  ]
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
