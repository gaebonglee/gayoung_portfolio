import React from "react";
import "../../style/pages/Projects.scss";
import "animate.css";
import Grid from "../../components/NewPortfolio/project/Grid";

interface ProjectsProps {
  show: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ show }) => {
  return (
    <section className={`projectSection ${show ? "slide-in" : ""}`}>
      <div className="ProjectTitle">
        <h1
          className={`animate__animated ${
            show ? "animate__flipInX animate-delay-1s" : ""
          }`}
        >
          PROJECTS
        </h1>
      </div>
      <div className="ProjectContainer">
        <Grid />
      </div>
    </section>
  );
};

export default Projects;
