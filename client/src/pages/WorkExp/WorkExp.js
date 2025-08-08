import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <div className="timeline-container">
            <VerticalTimeline lineColor="#1e1e2c" animate={false}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "#1e1e2c" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date="May 2024"
                iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                icon={<SiReact />}
              >
                <h3 className="vertical-timeline-element-title">
                  Research Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  NIT Warangal
                </h4>
                <p>
                  Machine Learning, Deep Learning, CNN, GAN Architecture
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>

            {/* Text beside the timeline (right side) */}
            <div className="project-summary">
              <p>
                Built a GAN-based model to
                enhance hazy images. Applied CNN layers and evaluated with
                PSNR/SSIM metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
