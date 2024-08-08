import React from "react";
import "../../style/pages/Projects.scss";

interface ProjectsProps {
  show: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ show }) => {
  return (
    <section className={`projectSection ${show ? "slide-in" : ""}`}>
      <div></div>
    </section>
  );
};

export default Projects;
