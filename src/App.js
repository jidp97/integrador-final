import "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
const router = createBrowserRouter([
{
  path: "/",
  element: <HomePage />
}
]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
