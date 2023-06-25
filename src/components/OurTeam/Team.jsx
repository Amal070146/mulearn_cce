import React from 'react'
import './Team.css'
import star from '../../assets/about/star.png'
import image from '../../assets/team/img1.png'
import line from '../../assets/team/line.png'

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
        <img className="group-JN7" src={star} />
        <img className="group-11d" src={star} />
        <img className="group-8rw" src={star} />
        <img className="team-line1-fM5" src={line} />
        <div className="team1-oCP">
          <div className="team1-img-KwR">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="enric-s-neelamkavil-Gdh">Enric S Neelamkavil</div>
            <div className="campus-lead-L7m">Campus Lead</div>
          </div>
        </div>
        <div className="team2-DhM">
          <div className="team2-img-kSP">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="enric-s-neelamkavil-Gdh">Enric S Neelamkavil</div>
            <div className="campus-lead-L7m">Campus Lead</div>
          </div>
        </div>
        <div className="team3-GhZ" id="238:214">
          <div className="team3-img-ztT" id="238:215">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="enric-s-neelamkavil-Gdh">Enric S Neelamkavil</div>
            <div className="campus-lead-L7m">Campus Lead</div>
          </div>
        </div>
        <div className="team4-XQX" id="238:237">
          <div className="team4-img-TJB" id="238:238">
            <img className="team-image-individual" src={image} />
          </div>
          <div className="team-name-designation">
            <div className="enric-s-neelamkavil-Gdh">Enric S Neelamkavil</div>
            <div className="campus-lead-L7m">Campus Lead</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team
