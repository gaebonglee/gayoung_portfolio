import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/NewPortfolio/Project.scss";
import { projects, ProjectType } from "../../data/projects";
import ProjectDetail from "./ProjectDetail";

const Project: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        sliderRef.current?.slickNext();
      } else {
        sliderRef.current?.slickPrev();
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="gallery">
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="imgFile">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
