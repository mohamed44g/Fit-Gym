<<<<<<< HEAD
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
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Push from "./Pages/Exercises_push";
import CaloriesCalc from "./Pages/Calories_calc";
import FoodCalories from "./Pages/Food";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/FIT" element={<App />} />
        <Route path="/FIT/" element={<App />} />
        <Route index element={<App />} />
        <Route path="exercises" element={<Push />} />
        <Route path="Calories_calc" element={<CaloriesCalc />} />
        <Route path="Food_Calories" element={<FoodCalories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
