import React from "react";
import "../../style/desktop/me/AboutMe.scss";

const AboutMe: React.FC = () => {
  return (
    <section className="aboutMeSection">
      <div className="introWrap">
        <div className="imageWrap"></div>
        <div className="textWrap">
          <div className="infoWrap">
            <svg className="lineShape" viewBox="0 0 200 100">
              <polyline
                points="0,50 50,50 100,0 150,50 200,50"
                className="lineShape"
              />
            </svg>
          </div>
          <div className="introWrap">
            <h3>Hello! I'm a junior front-end developer.</h3>
            <p>
              I developed a creative and meticulous design sense in the
              three-dimensional molding department.
            </p>
            <p>
              I became interested in web development because I wanted to exert a
              broader influence in the digital age, and I want to provide the
              best UX that combines design and technology through front-end
              development.
            </p>
            <p>
              Based on the technology stack gained through various challenges
              and experiences, I want to become a front-end developer that
              delivers value to more people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
