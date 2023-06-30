import React from "react";
import "./home.css";
import mu from "../../assets/home/mu.png";
import space from "../../assets/home/space.png";
import content from "../../assets/home/GroupRight.png";

const Home = () => {
  return (
    <div className="home-wrapper" id="home" data-aos="fade-up">
      <div className="home-wrapper-div">
        <div>
          <div className="home-main">
            <div className="home-space-img">
              <img src={space} alt="" />
            </div>
            {/* <div className="home-content-wrapper">
            <img className="mu" src={mu} alt="" />
            <div>
              <div className="home-getready">
                <div style={{ display: "flex", gap: 15 }}>
                  <p>get ready</p>
                  <p>t</p>
                </div>
                <img src={earth} alt="" />
              </div>
              <div className="home-witness">
                <div>
                  <p>witness the</p>
                  <p>µverse</p>
                </div>

                <p>at Christ College of Engineering!</p>
              </div>
            </div>
          </div> */}
            <div className="home-content-wrapper">
              <img src={content} alt="" />
              
            </div>
          </div>
        </div>
        <a href="#about">
          <button>
            <span class="m_scroll_arrows unu"></span>
            <span class="m_scroll_arrows doi"></span>
            <span class="m_scroll_arrows trei"></span>
            <span class="m_scroll_arrows quad"></span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
