import React from "react";
import "./Footer.css";

import Logo from "../../assets/logo.png";
import facebook from "../../assets/Footer/facebook.png";
import insta from "../../assets/Footer/insta.png";
import linkedin from "../../assets/Footer/linked.png";
import twitter from "../../assets/Footer/twitter.png";

import createbutton from "../../assets/createorjoin.png";
import whitelogo from "../../assets/whitelogo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h1>Explore Learning Circles</h1>
      <div className="footer-content-wrapper">
        <div className="footer-first-div">
          <p>
            An informal mechanism for bringing together learners who are
            interested in the same topic from across different fields and
            disciplines. A fantastic way to spend a small amount of time
            learning about new things with a group of people with same
            interests!
          </p>
          <div>
            <a href="">
              <p>Create/Join Learning Circles</p>
              <img src={createbutton} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-second-div">
          <div>
            <p>
              Reach us at
              <b>
                <a href="mailto:mulearn@cce.edu.in" style={{ color: "#fff" }}>
                  {" "}
                  mulearn@cce.edu.in
                </a>
              </b>
            </p>
          </div>
          <div>
            <img src={whitelogo} alt="" />
          </div>
          <div>
            <a href="https://mulearn.org/">µLearn</a>
            <a href="">Events</a>
            <a href="">Gallery</a>
            <a href="https://bit.ly/mulearnbrand">Branding</a>
          </div>
        </div>
        <div className="footer-third-div">
          <a href="">
            <img src={insta} alt="" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="footer-division"></div>
        <div className="footer-fifth-div">
          <p>
            Designed by&nbsp;
            <b>
              <a href="https://www.linkedin.com/in/enricsneelamkavil/">
                Enric S Neelamavil
              </a>
              &nbsp;
            </b>
            & Developed by&nbsp;
            <b>
              <a href="https://www.linkedin.com/in/amal-c-p/">Amal C P</a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
