import React from "react";
import "../../style/pages/Projects.scss";
import "animate.css";

interface ProjectsProps {
  show: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ show }) => {
  return (
    <section className={`projectSection ${show ? "slide-in" : ""}`}>
      <div className="ProjectTitle">

        <h1
          className={`animate__animated ${
            show ? "animate__fadeInUpBig animate-delay-1s" : ""
          }`}
        >
          Projects
        </h1>
        
      </div>
    </section>
  );
};

export default Projects;
