import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Toggle light/dark theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <h1>Hi, I am G Bhanu Jahnavi</h1>
          <h2>Student at NIT Raipur</h2>

          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=9391866169"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href="/bhanu_resume.pdf" download>
               My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
