import React, { useContext } from "react";
import "./WorkExperience.scss";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import suitcaseIcon from "../../assets/images/work.png";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (workExperiences.display) {
    return (
      <div id="experience" className="work-experience-section">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="experience-heading">Experience</h1>
          <div className="timeline-container">
            {workExperiences.experience.map((work, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-icon">
                <img src={suitcaseIcon} alt="Work Experience Icon" className="svg-icon" />
                </div>
                <div className="timeline-content">
                  <h3>{work.role}</h3>
                  <h4>{work.company}</h4>
                  <p className="timeline-date">{work.date}</p>
                  <ul>
                    {work.descBullets.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
