import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../compentants/Navbar/index";
import "./Home.scss";

export default function HomePage() {
  const sidenav = useRef();

  function closeNav() {
    sidenav.current.classList.remove("side-open");
  }

  function handleclick(e) {
    e.currentTarget.id === "push"
      ? localStorage.setItem("workout", "push")
      : localStorage.setItem("workout", "pro");
  }
  return (
    <>
      <Navbar ref={sidenav} />
      <div className="bg animate1"></div>
      <div id="mySidenav" className="sidenav" ref={sidenav}>
        <p className="closebtn" onClick={closeNav}>
          &times;
        </p>
        <Link to="/Calories_calc">Calories calculator</Link>
        <Link to="/Food_Calories">Food Calories</Link>
        <Link to="/exercises" id="push" onClick={handleclick}>
          Push pull leg
        </Link>
        <Link to="/exercises" id="pro" onClick={handleclick}>
          Pro split
        </Link>
      </div>
      <div className="HomePage container">
        <div className="HomePage-content animate2">
          <div className="HomePage-title">
            <h1>
              HELPING YOU REACH HIGHER AND
              <span className="HomePage-title-special">ACHIEVE MORE</span>
            </h1>
          </div>

          <div className="HomePage-des">
            <p>
              Get real results at Zeus with a plan tailored to your needs. Your
              fitness and health are important to us.
            </p>
          </div>

          <div className="HomePage-btn">
            <button className="btn">Get Stared</button>
          </div>
        </div>
      </div>
    </>
  );
}
