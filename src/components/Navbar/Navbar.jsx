import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menulogo from "../../assets/menulogo.png";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
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
        <button onClick={openMenu}>
          <img src={menulogo} alt="" />
        </button>
        {openmenu && (
          <div>
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
