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
