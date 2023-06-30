import React from "react";
import "./Connect.css";
import image from "../../assets/connect-with-img.png";
import discord from "../../assets/about/discordlogo.png";
import whatsapp from "../../assets/pinkwhatsapp.png";
const Contact = () => {
  return (
    <div className="connect-wrapper" id="contact" data-aos="fade-up">
      <h1>Connect With Us</h1>
      <div className="connect-content-wrapper">
        <div className="connect-content">
          <div className="connect-content-inner">
            <div className="connect-content-div">
              <p>Join µLearn CCE Discord server!</p>
              <p>
                Do join our campus community discord server, so you don’t miss
                out any of the updates.
              </p>
            </div>
            <div className="connect-content-button">
              <button>
                <img src={discord} alt="" />
                Join Discord
              </button>
              <button>
                <img src={whatsapp} alt="" />
                Join WhatsApp
              </button>
            </div>
          </div>
        </div>
        <div className="connect-image-wrapper">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
