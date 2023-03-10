import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "../pages/index";
import {
  Home,
  Checkout,
  Information,
  Payment,
  Success,
} from "../containers/index";
import { Layout } from "../components/index";
import AppProvider from "../context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/checkout/information",
          element: <Information />,
        },
        {
          path: "/checkout/payment",
          element: <Payment />,
        },
        {
          path: "/checkout/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <AppProvider>
        <RouterProvider router={router}></RouterProvider>
      </AppProvider>
    </div>
  );
}

export default App;
