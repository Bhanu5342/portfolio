import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="/bhanu.photo.jpg"
                alt="profile_pic"
                style={{ width: "70%", maxWidth: "400px" }}
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi, I'm Bhanu Jahnavi Gottumukkala, a passionate and driven Final year BTech student specializing in 
                Electronics and Communication Engineering with a focus on web development. I have a strong 
                foundation in computer fundamentals and am always eager to learn new technologies. With a CPI of 9.22, I strive 
                for excellence in both my academics and projects, constantly challenging myself to push the boundaries of 
                my skills and creativity. Feel free to explore my portfolio to see the projects I've worked on and the 
                impact I've made so far.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;