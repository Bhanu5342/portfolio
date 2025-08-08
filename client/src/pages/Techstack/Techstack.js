import React from "react";
import "./Techstack.css";
import { Techstacklist } from "../utils/Techstacklist";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs.
        </p>

        <div className="row">
          {Techstacklist.map((tech) => (
            <div key={tech._id} className="col-md-3 col-sm-6 mb-4 d-flex">
              <div className="card w-100 text-center p-2 techstack-card">
                <tech.icon className="tech-icon mb-2" />
                <h6 className="tech-name">{tech.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
