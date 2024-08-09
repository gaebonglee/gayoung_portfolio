import React, { useState } from "react";
import "../../../style/NewPortfolio/project/Grid.scss";
import { projects, ProjectType } from "../../../data/projects";
import ProjectDetail from "./ProjectDetail";
import ImageCell from "./ImageCell";

const Grid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const handleCardClick = (project: ProjectType) => {
    setSelectedProject(project);
  };

  return (
    <section className="gallery">
      {/* {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <div className="grid--large">
        {projects.map((project, index) => (
          <ImageCell
            key={index}
            project={project}
            index={index}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div> */}
      <div className="grid grid--large">
        {projects.map((project, index) => (
          <ImageCell
            key={index}
            project={project}
            index={index}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      <div className="content"></div>
    </section>
  );
};

export default Grid;
