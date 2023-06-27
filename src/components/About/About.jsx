import React from "react";
import "./About.css";
import person from "../../assets/about/personlogo.png";
import discord from "../../assets/about/discordlogo.png";
import clock from "../../assets/about/clocklogo.png";
const About = () => {

  return (
    <div id="#about" className="about-wrapper">
      <div className="about-content-main-wrapper">
        <h1>µLearn Pathway</h1>
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
                <h2>Improve your Profile</h2>
                <p>
                  Participate in events, complete tasks, earn Karma points for
                  your participation. Include these in your resume and promote
                  yourself.
                </p>
              </div>
            </div>
            <div className="about-individual-wrapper set3">
              <div className="track-about-div">
                <img src={discord} alt="" />
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
          </div>
        </div>
      </div>
      <div className="about-mu-banner">
       
      </div>
    </div>
  );
};

export default About;
