import React from "react";
import "./home.css";
import mu from "../../assets/home/mu.png";
import space from "../../assets/home/space.png";
import earth from "../../assets/home/earth.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-wrapper-div">
        <div className="home-main">
          <div className="home-space-img">
            <img src={space} alt="" />
          </div>
          <div className="home-content-wrapper">
            <img className="mu" src={mu} alt="" />
            <div>
              <div className="home-getready">
                <p>get ready t</p>
                <img src={earth} alt="" />
              </div>
              <div>
                <p>witness the</p>
                <p>µverse</p>
                <p>at Christ College of Engineering!</p>
              </div>
            </div>
          </div>
        </div>
        <button>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
          <span class="m_scroll_arrows quad"></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
