
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Food from "./Pages/Food";
const Push = lazy(() => import("./Pages/Exercises_push"));


// Ensure this element exists in your HTML
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/Fit-Gym/" element={<App />} />
        <Route path="exercises" element={<Push />} />
        <Route path="Food_Calories" element={<Food />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
