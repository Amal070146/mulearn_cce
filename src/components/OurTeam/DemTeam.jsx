import React from "react";
import "./DemTeam.css";
import image from "../../assets/team/img1.png";
import line from "../../assets/team/line.png";
import line2 from "../../assets/team/line2.png";

const DemTeam = () => {
  return (
    <div className="demteam-wrapper" id="team" data-aos="fade-up">
      <h1>Our Team</h1>
      <div className="demteam-wrapper-content">
        <div className="demteam-bg-line-wrapper">
          <img src={line} alt="" />
          <img src={line2} alt="" />
          <img src={line} alt="" />
          <img src={line2} alt="" />
        </div>
        <div className="demteam-team-wrapper">
          <div className="demteam-individual-wrapper mem1">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem2">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem3">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem4">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem5">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem6">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem7">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>

          <div className="demteam-individual-wrapper mem8">
            <div className="demteam-space-provider"></div>
            <div className="demteam">
              <img className="team-image-individual" src={image} />
              <div className="team-name-designation">
                <div className="team-member-name">Enric S Neelamkavil</div>
                <div className="team-member-designation">Campus Lead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemTeam;
