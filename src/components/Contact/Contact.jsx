import React from "react";
import "./Contact.css";
import astrologer from '../../assets/contact/astrologer.png'

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>Connect With Us</h1>
      <div className="contact-content-wrapper">
        <div className="contact-left-div">
          <div className="contact-left-div-top">
            <a href="mailto:mulearn@cce.edu.edu.in">mulearn@cce.edu.edu.in</a>
            <a href="mailto:mulearn@cce.edu.edu.in">mulearn@cce.edu.edu.in</a>
          </div>
          <div>
            <div>
              <p>100+</p>
              <p>STUDENTS ENROLLED</p>
            </div>
            <div>
              <p>20+</p>
              <p>STUDENTS ENROLLED</p>
            </div>
            <div>
              <p>80K+</p>
              <p>STUDENTS ENROLLED</p>
            </div>
          </div>
        </div>
        <div className="contact-right-div">
          <img src={astrologer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
