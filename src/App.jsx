import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import OurTeam from "./components/OurTeam/Team";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Events />
      <OurTeam />
      <Contact />
    </div>
  );
}

export default App;
