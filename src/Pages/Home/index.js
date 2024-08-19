
import React, { useRef, useCallback, lazy } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

const Navbar = lazy(() => import("../../components/Navbar"));

export default function HomePage() {
  const sidenav = useRef();

  const closeNav = useCallback(() => {
    sidenav.current.classList.remove("side-open");
  }, []);

  const handleClick = useCallback((e) => {
    const workoutType = e.currentTarget.id === "push" ? "push" : "pro";
    localStorage.setItem("workout", workoutType);
  }, []);

  return (
    <>
      <Navbar ref={sidenav} />
      <div className="bg animate1" aria-hidden="true"></div>
      <nav
        id="mySidenav"
        className="sidenav"
        ref={sidenav}
        aria-label="Side Navigation"
      >
        <button
          className="closebtn"
          onClick={closeNav}
          aria-label="Close Navigation"
        >
          &times;
        </button>
        <Link to="/Food_Calories">Food Calories</Link>
        <Link to="/exercises" id="push" onClick={handleClick}>
          Push Pull Leg
        </Link>
        <Link to="/exercises" id="pro" onClick={handleClick}>
          Pro Split
        </Link>
      </nav>
      <main className="HomePage container">
        <section className="HomePage-content animate2">
          <header className="HomePage-title">
            <h1>
              HELPING YOU REACH HIGHER AND
              <span className="HomePage-title-special">ACHIEVE MORE</span>
            </h1>
          </header>
          <p className="HomePage-des">
            Get real results at Zeus with a plan tailored to your needs. Your
            fitness and health are important to us.
          </p>
          <div className="HomePage-btn">
            <button className="btn" aria-label="Get Started">
              Get Started
            </button>
          </div>
        </section>
      </main>
    </>
  );
}