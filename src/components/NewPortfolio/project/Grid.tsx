import React, { useState, useEffect } from "react";
import "../../../style/NewPortfolio/project/Grid.scss";
import { projects, ProjectType } from "../../../data/projects";
import ProjectDetail from "./ProjectDetail";
import ImageCell from "./ImageCell";
import { gsap } from "gsap";

const Grid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [showDetail, setShowDetail] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    if (!resetAnimation) {
      showGridImg();
    }
  }, [resetAnimation]);

  const showGridImg = () => {
    const gridCells = document.querySelectorAll(
      ".grid__cell"
    ) as NodeListOf<HTMLElement>;

    gsap.fromTo(
      gridCells,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.8,
          from: "random",
        },
      }
    );
    setShowDetail(false);
  };

  const closeGridImg = (index: number) => {
    const gridCells = document.querySelectorAll(
      ".grid__cell"
    ) as NodeListOf<HTMLElement>;

    gsap.to(gridCells, {
      duration: 0.8,
      opacity: 0,
      y: 40,
      ease: "power1.inOut",
      stagger: {
        amount: 0.8,
        from: "center",
        grid: "auto",
      },
      onComplete: () => {
        setShowDetail(true);
        setTimeout(() => showContent(index), 100);
      },
    });
  };

  const showContent = (index: number) => {
    gsap.fromTo(
      ".content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          document.querySelector(".content")?.classList.add("visible");
        },
      }
    );
  };

  const handleCardClick = (project: ProjectType, index: number) => {
    setSelectedProject({ ...project, index });
    closeGridImg(index);
  };

  const closeContent = () => {
    if (!selectedProject) return;

    gsap.to(".content", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        setSelectedProject(null);
        setShowDetail(false);
        setResetAnimation(true);
        setTimeout(() => setResetAnimation(false), 0);
      },
    });
  };

  return (
    <section className="gallery">
      {!showDetail ? (
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
      ) : (
        selectedProject && (
          <ProjectDetail project={selectedProject} onClose={closeContent} />
        )
      )}
    </section>
  );
};

export default Grid;
