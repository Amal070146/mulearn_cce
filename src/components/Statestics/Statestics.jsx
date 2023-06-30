import React from "react";
import "./Statestics.css";
import logo from '../../assets/logo-large.png'
const Statestics = () => {
  return (
    <div className="Statestics-wrapper">
      <h1>CCE Statistics</h1>
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
