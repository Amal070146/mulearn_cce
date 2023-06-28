import React from "react";
import "./Team.css";

import star from "../../assets/about/star.png";
import image from "../../assets/team/img1.png";
import line from "../../assets/team/line.png";
import line2 from "../../assets/team/line2.png";

const OurTeam = () => {
  return (
    <div className="team-wrapper" id="team">
      <h1>Our Team</h1>
      <div className="team-body-wrapper">
        <div className="team-bg-line-wrapper">
          <img src={line} alt="" />
          <img src={line2} alt="" />
          <img src={line} alt="" />
          <img src={line2} alt="" />
        </div>
        <div className="team-members-details-wrapper">
          <div className="team team1">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team2">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team3">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team4">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team5">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team6">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team7">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className="team team8">
            <div className="team1-img">
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
