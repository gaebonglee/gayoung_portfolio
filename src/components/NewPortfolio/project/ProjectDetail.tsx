import React from "react";
import { projects, ProjectType } from "../../../data/projects";
import "../../../style/NewPortfolio/project/ProjectDetail.scss";
import { HiArrowLongLeft } from "react-icons/hi2";

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="project_detail">
      <div className="closeBtn">
        <button onClick={onClose}>
          <HiArrowLongLeft />
        </button>
      </div>

      <div className="cardContent">
        <div className="myWork_wrap">
          <div className={`myWork ${project.design ? "true" : "false"}`}>
            <a>Design</a>
          </div>
          <div className={`myWork ${project.frontEnd ? "true" : "false"}`}>
            <a>Front-end</a>
          </div>
          <div className={`myWork ${project.backEnd ? "true" : "false"}`}>
            <a>Back-end</a>
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
