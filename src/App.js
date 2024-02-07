import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Project from "./components/Project";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact";
import './App.css'

function App() {
  return (
    <>
    
      <Navbar  />
    <div className="p-10 bg-backgroundss w-full h-full">
      
      
      <div id="home">
        <Home />
      </div>

      <div id="skill">
        <Skill />
      </div>
      
      <div id="project">
        <Project />
      </div>

      <div id="contact">
        <Contact/>
      </div>
      
    </div>
    </>
  );
  
}

export default App;
