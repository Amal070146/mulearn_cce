import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menulogo from "../../assets/menulogo.png";
import { useReactPath } from "../../customHooks/path.hook";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = ["home", "about", "events", "team", "contact"];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div
      className="navbar-wrapper"
      style={{ background: navbg ? "rgba(255,255,255,0.7)" : "transparent" }}
    >
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right">
        {navContent.map((content, i) => (
          <a href={`#${content}`} key={i.toString() + content}>
            <p
              style={{
                borderBottom: window.location.href.includes(`#${content}`)
                  ? "4px solid #A1A1FF"
                  : "",
              }}
            >
              {content}
            </p>
          </a>
        ))}{" "}
        <button>Join Mulearn</button>
      </div>
      <div className="navbar-mobile">
        <button onClick={openMenu}>
          <img src={menulogo} alt="" />
        </button>
        {openmenu && (
          <div>
            {navContent.map((content, i) => (
              <a href={`#${content}`} key={i.toString() + content}>
                <p
                  style={{
                    borderBottom: window.location.href.includes(`#${content}`)
                      ? "4px solid #A1A1FF"
                      : "",
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
            <button>Join Mulearn</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
