import React from "react";
import "./About.css";
import Marquee from "react-fast-marquee";

import person from "../../assets/about/personlogo.png";
import discord from "../../assets/about/discordlogo.png";
import clock from "../../assets/about/clocklogo.png";
import mu from "../../assets/EVENTS/mu-pink.png";
import muw from "../../assets/about/mu-mark.png";
const About = () => {
  return (
    <div id="about" className="about-wrapper" data-aos="fade-up">
      <div className="about-content-main-wrapper">
        <div className="about-heading">
          <h1>µLearn Pathway</h1>
          <p>
            Curious to know more about µLearn? Wanna explore what all wonders we
            can do as a team? Come, witness it by yourself!
          </p>
        </div>
        <div className="pathway-arch">
          <div class="hemisphere"></div>
          <div className="about-content-wrapper">
            <div className="about-individual-wrapper set1">
              <div className="track-about-div">
                <img src={person} alt="" />
              </div>
              <div>
                <h2>Improve your Profile</h2>
                <p>
                  Participate in events, complete tasks, earn Karma points for
                  your participation. Include these in your resume and promote
                  yourself.
                </p>
              </div>
            </div>
            <div className="about-individual-wrapper set2">
              <div className="track-about-div">
                <img src={clock} alt="" />
              </div>
              <div>
                <h2>Network with others</h2>
                <p>
                  Start networking with students, mentors and enablers on the
                  Discord channels. Complete tasks on Discord & earn Karma.
                </p>
              </div>
            </div>
            <div className="about-individual-wrapper set3">
              <div className="track-about-div">
                <img src={discord} alt="" />
              </div>
              <div>
                <h2>Register yourself</h2>
                <p>
                  Join our Discord server and link your µid. Complete your
                  profile, fill up the details in the account registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-mu-banner" id="about-mu-banner">
        <Marquee
          style={{ width: "100vw" }}
          gradient={false}
          className="marquee"
        >
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />{" "}
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />
          <img className="marquee-img" src={mu} alt="" />
          <img className="marquee-img" src={muw} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default About;
