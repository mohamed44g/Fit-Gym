<<<<<<< HEAD
import React, { lazy, Suspense } from "react";
import "./style/main.scss"; // If main.scss is global, keep it here

// Lazy load components
const HomePage = lazy(() => import("./Pages/Home/index.js"));
const Services = lazy(() => import("./Pages/Services"));
const ChooseUs = lazy(() => import("./Pages/ChooseUs/index.js"));
const Prices = lazy(() => import("./Pages/Price/index.js"));
const Feedback = lazy(() => import("./Pages/Feedback/index.js"));
const Footer = lazy(() => import("./Pages/Footer/index.js"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <HomePage />
        <Services />
        <ChooseUs />
        <Prices />
        <Feedback />
        <Footer />
      </div>
    </Suspense>
=======
import React from "react";
import HomePage from "./Pages/Home/index.js";
import "./style/main.scss";
import Services from "./Pages/Services";
import ChooseUs from "./Pages/ChooseUs/index.js";
import Prices from "./Pages/Price/index.js";
import Feedback from "./Pages/Feedback/index.js";
import Footer from "./Pages/Footer/index.js";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Services />
      <ChooseUs />
      <Prices />
      <Feedback />
      <Footer />
    </div>
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
  );
}

export default App;
