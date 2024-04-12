import "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Home } from "./components/HomePage/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/HomePage/SignUpForm";
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="/registrar" element={<SignUpForm />} />
        </Route>
       
      </Routes>
    </>
  );
}

export default App;
