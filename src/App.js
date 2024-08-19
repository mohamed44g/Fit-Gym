
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
  )
}

export default App;
