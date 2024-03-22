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
  );
}

export default App;
