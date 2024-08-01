import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../style/desktop/me/AboutMe.scss";

gsap.registerPlugin(ScrambleTextPlugin);

const AboutMe: React.FC = () => {
  const scrambleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrambleRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
      tl.to(scrambleRef.current, {
        duration: 3,
        scrambleText: {
          text: `Hello! I'm a junior front-end developer. I developed a creative and meticulous design sense in the three-dimensional molding department. I became interested in web development because I wanted to exert a broader influence in the digital age, and I want to provide the best UX that combines design and technology through front-end development. Based on the technology stack gained through various challenges and experiences, I want to become a front-end developer that delivers value to more people.`,
          chars: "lowerCase",
          revealDelay: 0.5,
          tweenLength: false,
        },
      });
    }
  }, []);

  return (
    <section className="aboutMeSection">
      <div className="introWrap">
        <div className="imageWrap"></div>
        <div className="textWrap">
          <div className="introWrap" id="scramble"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
