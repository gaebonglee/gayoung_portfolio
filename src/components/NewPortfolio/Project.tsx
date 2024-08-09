import React, { useState } from "react";
import "../../style/NewPortfolio/Project.scss";
import { projects, ProjectType } from "../../data/projects";
import ProjectDetail from "./ProjectDetail";

const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleCardClick = (project: ProjectType) => {
    setSelectedProject(project);
  };

  return (
    <div className="gallery">
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <div className="grid-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleCardClick(project)}
          >
            <div className="imgFile">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
