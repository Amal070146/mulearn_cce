import React from "react";
import "./Statestics.css";
import logo from "../../assets/logo-large.png";
import planet from "../../assets/Statistics-planet.png";
import planet2 from "../../assets/Statistics-planet2.png";
const Statestics = () => {
  
  return (
    <div className="Statestics-wrapper" data-aos="fade-up">
      <h1>CCE Statistics</h1>
      <div className="planet-wrapper">
        {/* <img className="planet-statistics" src={planet} alt="" /> */}
        <img className="planet-statistics" src={planet2} alt="" />
        <section className="spheres">
          <figure className="planet">
            <span className="shadow"></span>
          </figure>
        </section>
      </div>
      <div className="statestics-content-wrapper">
        <div className="statestics-content-left">
          <div className="statestics-content-left-individual">
            <p>100+</p>
            <p>STUDENTS</p>
            <p>ENROLLED</p>
          </div>
          <div className="statestics-content-left-individual">
            <p>20+</p>
            <p>LEARNING</p>
            <p>CIRCLES</p>
          </div>
          <div className="statestics-content-left-individual">
            <p>05+</p>
            <p>INTEREST</p>
            <p>GROUPS</p>
          </div>
          <div className="statestics-content-left-individual">
            <p>80K+</p>
            <p>KARMA</p>
            <p>MINED</p>
          </div>
        </div>
        <div className="statestics-content-right">
          <img src={logo} alt="" />
          <p>RANK : 120</p>
        </div>
      </div>
    </div>
  );
};

export default Statestics;
