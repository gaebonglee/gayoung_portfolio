import React, { useEffect, useState } from "react";
import "../../style/desktop/me/AboutMe.scss";

const AboutMe: React.FC = () => {
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);

  const errorHTML = `<div className="textWrap">
          <h3>Hello! I'm a junior front-end developer.</h3>
          <p>
            I developed a creative and meticulous design sense in the
            three-dimensional molding department.
          </p>
          <p>
            I became interested in web development because I wanted to exert a
            broader influence in the digital age, and I want to provide the best
            UX that combines design and technology through front-end
            development.
          </p>
          <p>
            Based on the technology stack gained through various challenges and
            experiences, I want to become a front-end developer that delivers
            value to more people.
          </p>
        </div>`;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < errorHTML.length) {
          setContent(errorHTML.slice(0, prevIndex + 1) + "|");
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          setContent(errorHTML);
          return prevIndex;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="aboutMeSection">
      <div className="introWrap">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </section>
  );
};

export default AboutMe;
