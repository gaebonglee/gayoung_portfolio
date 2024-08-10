import React from "react";
import "../../style/pages/Projects.scss";
import Grid from "../../components/NewPortfolio/project/Grid";

interface ProjectsProps {
  show: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ show }) => {
  return (
    <section className={`projectSection ${show ? "slide-in" : ""}`}>
      <div className="ProjectContainer">
        <Grid />
      </div>
    </section>
  );
};

export default Projects;
