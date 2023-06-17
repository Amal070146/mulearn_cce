import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right">
        <a href="">
          <p>Home</p>
        </a>
        <a href="">
          <p>About</p>
        </a>
        <a href="">
          <p>Events</p>
        </a>
        <a href="">
          <p>Our Team</p>
        </a>
        <a href="">
          <p>Contact</p>
        </a>
        <button>Join Mulearn</button>
      </div>
      <div className="navbar-mobile">
        <a href="">
          <p>Home</p>
        </a>
        <a href="">
          <p>About</p>
        </a>
        <a href="">
          <p>Events</p>
        </a>
        <a href="">
          <p>Our Team</p>
        </a>
        <a href="">
          <p>Contact</p>
        </a>
        <button>Join Mulearn</button>
      </div>
    </div>
  );
};

export default Navbar;
