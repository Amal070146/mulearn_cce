import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import OurTeam from "./components/OurTeam/Team"
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Events />
      <OurTeam />
      <Contact />
    </div>
  );
}

export default App;
