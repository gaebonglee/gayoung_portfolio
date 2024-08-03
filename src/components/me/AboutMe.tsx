import React, { useEffect } from "react";
import "../../style/desktop/me/AboutMe.scss";

const scrambleText = (
  element: HTMLElement,
  text: string,
  chars: string,
  duration: number
) => {
  const scrambleChars = chars.split("");
  const revealDelay = 50;
  const interval = duration / text.length;
  let scrambledText = text
    .split("")
    .map(() => scrambleChars[Math.floor(Math.random() * scrambleChars.length)])
    .join("");
  element.textContent = scrambledText;

  text.split("").forEach((char, i) => {
    setTimeout(() => {
      scrambledText =
        scrambledText.substring(0, i) + char + scrambledText.substring(i + 1);
      element.textContent = scrambledText;
    }, interval * i + revealDelay);
  });
};

const AboutMe: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scramble");
    const chars = "0123456789!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
    const duration = 2000;

    elements.forEach((element) => {
      scrambleText(element, element.textContent || "", chars, duration);
    });
  }, []);

  return (
    <section className="aboutMeSection">
      <div className="introWrap">
        <div className="imageWrap"></div>
        <div className="textWrap">
          <h3 className="scramble">Hello! I'm a junior front-end developer.</h3>
          <p className="scramble">
            I developed a creative and meticulous design sense in the
            three-dimensional molding department.
          </p>
          <p className="scramble">
            I became interested in web development because I wanted to exert a
            broader influence in the digital age, and I want to provide the best
            UX that combines design and technology through front-end
            development.
          </p>
          <p className="scramble">
            Based on the technology stack gained through various challenges and
            experiences, I want to become a front-end developer that delivers
            value to more people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
