import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/NewPortfolio/Project.scss";
import { projects } from "../../data/projects";

const Project: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

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
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="imgFile">
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
        ))}
      </Slider>
    </div>
  );
};

export default Project;
