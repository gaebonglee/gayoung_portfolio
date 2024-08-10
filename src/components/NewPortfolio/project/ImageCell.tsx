import React from "react";
import { ProjectType } from "../../../data/projects";
import "../../../style/NewPortfolio/project/ImageCell.scss";
import { gsap } from "gsap";

interface ImageCellProps {
  project: ProjectType;
  index: number;
  onClick: () => void;
}

const ImageCell: React.FC<ImageCellProps> = ({ project, index, onClick }) => {
  const handleMouseEnter = () => {
    gsap.to(`.grid__cell-img-${index}`, {
      scale: 0.95,
      duration: 0.8,
      ease: "expo.out",
    });
    gsap.to(`.grid__cell-img-inner-${index}`, {
      scale: 1.1,
      duration: 0.8,
      ease: "expo.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(`.grid__cell-img-${index}`, {
      scale: 1,
      duration: 0.8,
      ease: "expo.out",
    });
    gsap.to(`.grid__cell-img-inner-${index}`, {
      scale: 1,
      duration: 0.8,
      ease: "expo.out",
    });
  };

  return (
    <div
      className={`grid__cell ${project.gridPosition}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`grid__cell-img grid__cell-img-${index}`}>
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
