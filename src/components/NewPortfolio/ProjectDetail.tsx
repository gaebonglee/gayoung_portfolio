// ProjectDetail.tsx
import React from "react";
import { projects, ProjectType } from "../../data/projects";

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="project-detail">
      <button onClick={onClose}>Close</button>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <div className="explanation_inner description">
          {project.description}
        </div>
        <div className="explanation_inner period">
          <h4># Period : </h4>
          <a>{project.period}</a>
        </div>
        <div className="explanation_inner tech">
          <h4># Tech :</h4>
          <a> {project.tech}</a>
        </div>
        <div className="explanation_inner mywork">
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
