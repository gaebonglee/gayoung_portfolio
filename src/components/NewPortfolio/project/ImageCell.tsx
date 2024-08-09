import React from "react";
import { ProjectType } from "../../../data/projects";
import "../../../style/NewPortfolio/project/ImageCell.scss";
import { gsap } from "gsap";

interface ImageCellProps {
  project: ProjectType;
  index: number;
  onClick: () => void;
}

const ImageCell: React.FC<ImageCellProps> = ({ project, index }) => {
  const handleMouseEnter = () => {
    gsap.to(`.grid__cell-img-${index}`, {
      scale: 0.95,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(`.grid__cell-img-inner-${index}`, {
      scale: 1.1,
      duration: 0.3,
      ease: "expo",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(`.grid__cell-img-${index}`, {
      scale: 1,
      duration: 0.3,
      ease: "expo",
    });
    gsap.to(`.grid__cell-img-inner-${index}`, {
      scale: 1,
      duration: 0.3,
      ease: "expo",
    });
  };

  return (
    <div className={`grid__cell ${project.gridPosition}`}>
      <div
        className={`grid__cell-img grid__cell-img-${index}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`grid__cell-img-inner grid__cell-img-inner-${index}`}
          data-item={index}
        >
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  );
};

export default ImageCell;
