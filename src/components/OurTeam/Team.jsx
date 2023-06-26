import React from "react";
import "./Team.css";
import star from "../../assets/about/star.png";
import image from "../../assets/team/img1.png";
import line from "../../assets/team/line.png";
import line2 from "../../assets/team/line2.png";

const Team = () => {
  return (
    <div className="team-wrapper">
      <h1>Our Team</h1>
      {/* <div className="team-img-wrapper">
        <svg
          className="team-bg-line"
          viewBox="0 0 2020 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.196289 0C42.863 35.1667 238.296 116.2 438.696 119C689.196 122.5 895.823 39 1016.7 39C1245.7 39 1321.7 119 1649.2 119C1911.2 119 2019.2 45.3333 2019.2 9"
            stroke="#D4A7FF"
            stroke-width="55"
          />
        </svg>
        <svg
          className="team-bg-line"
          viewBox="0 0 2020 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.196289 0C42.863 35.1667 238.296 116.2 438.696 119C689.196 122.5 895.823 39 1016.7 39C1245.7 39 1321.7 119 1649.2 119C1911.2 119 2019.2 45.3333 2019.2 9"
            stroke="#D4A7FF"
            stroke-width="55"
          />
        </svg>
      </div> */}

      {/*  */}
      <div className="team-content-wrapper">
        <img className="star1" src={star} />
        <img className="star2" src={star} />
        <img className="star3" src={star} />
        <img className="team-line1-fM5" src={line} />
        <div className="team1">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
        <div className="team2">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
        <div className="team3">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
        <div className="team4">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
      </div>

      {/* line 2 */}

      <div class="auto-group-krhq-14P">
        <img class="group-Kas" src={star} />
        <img class="group-et3" src={star} />
        <img class="team-line2-njM" src={line2} />
        <div class="team5">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
        <div class="team6" >
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
        <div class="team7">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
        <div class="team8">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="team-member-name">Enric S Neelamkavil</div>
            <div className="team-member-designation">Campus Lead</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
