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
        <div className="myWork_wrap">
          <div className="myWork">
            <a>{project.design}Design</a>
          </div>
          <div className="myWork">
            <a>{project.frontEnd}Front-end</a>
          </div>
          <div className="myWork">
            <a>{project.backEnd}Back-end</a>
          </div>
        </div>
        <div className="titleWrap">
          <p>{project.title}</p>
          <a>{project.subTitle}</a>
        </div>
        <div className="description">
          <p>{project.description}</p>
        </div>
        <div className="card_inner">
          <h4>Period</h4>
          <a>{project.period}</a>
        </div>
        <div className="card_inner">
          <h4>Tech</h4>
          <a> {project.tech}</a>
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
