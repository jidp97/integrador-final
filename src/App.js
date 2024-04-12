import "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signup",
      element: <SignUpForm />,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
