import React, { useState} from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
      <div className={darkMode ? 'dark' : ''} >
        <div className="bg-[#f3f3f3] dark:bg-slate-900">
          <div className=" flex flex-row">
          <Navbar />
          <button onClick={toggleDarkMode} className="w-5 h-5 ml-auto mt-[30px] mr-[45px]">{darkMode ? <i class="fa-regular fa-lightbulb fa-2x text-white"></i> : <i class="fa-solid fa-moon fa-2x"></i> }</button>
          </div>
          <Home />
          <About />
          <Projects />
        </div>
        
      </div>
  );
}
