import React, { useState, useEffect } from "react";
import Logo from './assets/logo.png'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import OurTeam from "./components/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";

import Contact from "./components/Contact/Contact";
import AOS from "aos";

import "aos/dist/aos.css";
AOS.init();
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a 3-second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader" style={{
          width:"100vw",
          height:"100vh",
          background:"black",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <img src={Logo} alt="" />
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Events />
          <OurTeam />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
