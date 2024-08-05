import React from "react";
import "../../style/desktop/me/Skills.scss";
import "../../style/desktop/me/Github.scss";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "HTML5",
      level: 80,
      image: `${process.env.PUBLIC_URL}/image/aboutme/htmlIcon.png`,
    },
    {
      name: "CSS3",
      level: 80,
      image: `${process.env.PUBLIC_URL}/image/aboutme/cssIcon.png`,
    },
    {
      name: "JavaScript",
      level: 70,
      image: `${process.env.PUBLIC_URL}/image/aboutme/javascript_logo.png`,
    },
    {
      name: "React",
      level: 75,
      image: `${process.env.PUBLIC_URL}/image/aboutme/react_logo.png`,
    },
    {
      name: "TypeScript",
      level: 40,
      image: `${process.env.PUBLIC_URL}/image/aboutme/typeScript.png`,
    },
    {
      name: "Sass",
      level: 70,
      image: `${process.env.PUBLIC_URL}/image/aboutme/sass_logo.png`,
    },
    {
      name: "MySQL",
      level: 60,
      image: `${process.env.PUBLIC_URL}/image/aboutme/MySQL_logo.png`,
    },
    {
      name: "GitHub",
      level: 80,
      image: `${process.env.PUBLIC_URL}/image/aboutme/github_logo.png`,
    },
  ];

  return (
    <section className="skills_container">
      <div className="textContent">
        <section className="githubSection">
          <div className="line">
            <a
              href="https://github.com/gaebonglee"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
        </section>
        <a className="skillTitle">SKILLS</a>
      </div>
      <div className="skills_wrap">
        {skills.map((skill, index) => (
          <div className="skill_icon" key={index}>
            <img src={skill.image} alt={skill.name} />
            <div className="skill_level">{`${skill.level}%`}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
