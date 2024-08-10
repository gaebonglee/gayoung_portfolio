import React, { useState } from "react";
import "../../../style/NewPortfolio/project/Grid.scss";
import { projects, ProjectType } from "../../../data/projects";
import ProjectDetail from "./ProjectDetail";
import ImageCell from "./ImageCell";
import { gsap } from "gsap";

const Grid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const handleCardClick = (project: ProjectType, index: number) => {
    setSelectedProject({ ...project, index });
    showContent(index);

    const gridCells = document.querySelectorAll(".grid__cell");
    gridCells.forEach((cell, cellIndex) => {
      if (cellIndex !== index) {
        cell.classList.add("grid__cell--hidden");
      }
    });
  };

  const showContent = (index: number) => {
    const cellElement = document.querySelector(
      `.grid__cell-img-${index}`
    ) as HTMLElement | null;
    const cellInnerElement = document.querySelector(
      `.grid__cell-img-inner-${index}`
    ) as HTMLElement | null;

    if (!cellElement || !cellInnerElement) {
      console.error("Element not found");
      return;
    }

    const targetX = window.innerWidth * 0.8;
    const targetY = window.innerHeight * 0.2;

    // 현재 카드의 중앙 좌표
    const cardRect = cellElement.getBoundingClientRect();
    const currentX = cardRect.left + cardRect.width / 2;
    const currentY = cardRect.top + cardRect.height / 2;

    // 이동해야 할 거리 계산
    const x = targetX - currentX;
    const y = targetY - currentY;

    const scale = 1.5; 

    gsap
      .timeline({
        defaults: {
          duration: 1.2,
          ease: "expo.inOut",
        },
      })
      .to(cellElement, { scale, x, y })
      .to(cellInnerElement, { scale: 1 }, 0)
      .to(".grid", { pointerEvents: "none" }, 0)
      .to(".content", { opacity: 1, pointerEvents: "auto" }, "-=0.8");
  };

  const closeContent = () => {
    if (!selectedProject) return;
    const gridCells = document.querySelectorAll(".grid__cell");
    gridCells.forEach((cell) => {
      cell.classList.remove("grid__cell--hidden");
    });

    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: "expo.inOut",
        },
      })
      .to(".content", { opacity: 0, pointerEvents: "none" })
      .to(".grid", { pointerEvents: "auto" }, 0)
      .to(
        `.grid__cell-img-${selectedProject.index}`,
        { scale: 1, x: 0, y: 0 },
        0
      );

    setSelectedProject(null);
  };

  return (
    <section className="gallery">
      <div className="grid grid--large">
        {projects.map((project, index) => (
          <ImageCell
            key={index}
            project={project}
            index={index}
            onClick={() => handleCardClick(project, index)}
          />
        ))}
      </div>
      <div className="content">
        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={closeContent} />
        )}
      </div>
    </section>
  );
};

export default Grid;
