import React from "react";
import { projects, ProjectType } from "../../data/projects";
import "../../style/NewPortfolio/ProjectDetail.scss";

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="project_detail">
      <button onClick={onClose}>Close</button>
      <div className="cardContent">
        <div className="titleWrap"></div>
        <a>{project.title}</a>
        <div className="card_inner description">
          <p>{project.description}</p>
        </div>
        <div className="card_inner period">
          <h4># Period : </h4>
          <a>{project.period}</a>
        </div>
        <div className="card_inner tech">
          <h4># Tech :</h4>
          <a> {project.tech}</a>
        </div>
        <div className="card_inner myWork">
          <h4> # My Work :</h4>
          <a>{project.mywork}</a>
        </div>
        <div className="linkWrap">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
