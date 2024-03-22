import React from "react";
import Logo from "../../assets/images/elements-fitness-gym-8HNE96.png";
import menu from "../../assets/images/icons8-menu-96 (6).png";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import "./Navbar.scss";

const Navbar = forwardRef(function (props, ref) {
  function handleclick(e) {
    e.currentTarget.id === "push"
      ? localStorage.setItem("workout", "push")
      : localStorage.setItem("workout", "pro");
  }

  function openNav() {
    ref.current.classList.add("side-open");
  }

  return (
    <>
      <div className="d-flex justify-content-between con navbar">
        <div className="nav-icon">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className="nav-links-contanier d-flex">
          <ul className="nav-links d-flex justify-content-between">
            <span className="line"></span>
            <li>
              <a href="_">Home</a>
            </li>
            <span className="line"></span>
            <li>
              <Link to="/Calories_calc">Calories calculator</Link>
            </li>
            <span className="line"></span>
            <li>
              <Link to="/Food_Calories">Food Calories</Link>
            </li>
            <span className="line"></span>
            <li className="dropdown">
              <p href="" className="dropbtn">
                exercises
              </p>
              <div className="dropdown-content">
                <Link to="/exercises" id="push" onClick={handleclick}>
                  Push pull leg
                </Link>
                <Link to="/exercises" id="pro" onClick={handleclick}>
                  Pro split
                </Link>
              </div>
            </li>
            <span className="line"></span>
          </ul>

          <div className="btn-nav">become a member</div>
          <div className="menu">
            <img src={menu} alt="" onClick={openNav} />
          </div>
        </div>
      </div>
    </>
  );
});

export default Navbar;
