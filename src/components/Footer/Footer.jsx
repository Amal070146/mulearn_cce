import React from "react";
import "./Footer.css";

import Logo from "../../assets/logo.png";
import whatsapp from '../../assets/Footer/whatsapp.png'
import facebook from '../../assets/Footer/facebook.png'
import insta from '../../assets/Footer/insta.png'
import linkedin from '../../assets/Footer/linked.png'
import twitter from '../../assets/Footer/twitter.png'
import youtube from "../../assets/Footer/youtube.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-div-first">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="footer-div-first-set">
          <div>
            <h4>Connect</h4>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Mentors</a>
            <a href="">Enablers</a>
            <a href="">Careers</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="">Campus Chapters</a>
            <a href="">Interest Groups</a>
            <a href="">Learning Circles</a>
            <a href="">Our Team</a>
            <a href="">Partners</a>
          </div>
          <div>
            <h4>Media</h4>
            <a href="">Gallery</a>
            <a href="">News</a>
            <a href="">Blogs</a>
          </div>
        </div>
      </div>
      <div className="footer-line-divider"></div>
      <div className="footer-div-third">
        <div className="footer-div-third-fir">
          <a href="">Privacy Policy</a>
          <a href="">Terms and Conditions</a>
          <a href="">Support</a>
        </div>
        <div className="footer-social-media">
          <img src={whatsapp} alt="" />
          <img src={twitter} alt="" />
          <img src={insta} alt="" />
          <img src={linkedin} alt="" />
          <img src={youtube} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div>
          <p>© Copyright 2023, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
