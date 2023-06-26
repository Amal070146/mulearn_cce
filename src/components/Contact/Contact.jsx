import React from "react";
import "./Contact.css";
import astrologer from "../../assets/contact/astrologer.png";

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
          <div className="contact-left-div-bottom">
            <div>
              <p>100+</p>
              <p>
                STUDENTS<br></br>ENROLLED
              </p>
            </div>
            <div>
              <p>20+</p>
              <p>
                LEARNING<br></br>CIRCLES
              </p>
            </div>
            <div>
              <p>80K+</p>
              <p>
                KKARMA<br></br>MINED
              </p>
            </div>
          </div>
        </div>
        <div className="contact-right-div">
          <img src={astrologer} alt="" />
        </div>
      </div>
      <div className="outer-div-contact-footer">
        <div className="outer-div-contact-footer-bottom"></div>
        <div className="inner-div-contact-footer">
          <div className="planet-image-wrapper-div">
            <button>Join Mulearn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
