import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are some of the projects I’ve worked on, highlighting my skills in web development, problem-solving,
          and integrating technologies like machine learning. These projects reflect my ability to build responsive,
          efficient, and innovative applications using modern web tools.
        </p>

        <div className="row" id="ads">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card rounded text-center p-3">
              <span className="card-notify-badge">website</span>
              <h5 className="mt-3 text-uppercase">Task Management App</h5>
              <div className="card-image-overly mt-2">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Redux</span>
                <span className="card-detail-badge">HTML</span>
              </div>
              <a className="ad-btn mt-3" href="https://chic-longma-01ffef.netlify.app/">
                View
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card rounded text-center p-3">
              <span className="card-notify-badge">Mern Stack</span>
              <h5 className="mt-3 text-uppercase">Portfolio Website</h5>
              <div className="card-image-overly mt-2">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node.js</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <a className="ad-btn mt-3" href="https://creative-cobbler-463abd.netlify.app/">
                View
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card rounded text-center p-3">
              <span className="card-notify-badge">Frontend</span>
              <h5 className="mt-3 text-uppercase">Ecommerce Website</h5>
              <div className="card-image-overly mt-2">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JS</span>
              </div>
              <a className="ad-btn mt-3" href="https://gilded-moonbeam-c6c866.netlify.app/">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
