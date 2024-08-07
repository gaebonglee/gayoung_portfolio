import React from "react";
import "../../../style/NewPortfolio/me/Skills.scss";
import "../../../style/NewPortfolio/me/Github.scss";

const Skills: React.FC<{ resetAnimation: boolean }> = ({ resetAnimation }) => {
  const skills = [
    {
      name: "HTML5",
      image: `${process.env.PUBLIC_URL}/image/aboutme/htmlIcon.png`,
    },
    {
      name: "CSS3",
      image: `${process.env.PUBLIC_URL}/image/aboutme/cssIcon.png`,
    },
    {
      name: "JavaScript",
      image: `${process.env.PUBLIC_URL}/image/aboutme/javascript_logo.png`,
    },
    {
      name: "React",
      image: `${process.env.PUBLIC_URL}/image/aboutme/react_logo.png`,
    },
    {
      name: "TypeScript",
      image: `${process.env.PUBLIC_URL}/image/aboutme/typeScript.png`,
    },
    {
      name: "Sass",
      image: `${process.env.PUBLIC_URL}/image/aboutme/sass_logo.png`,
    },
    {
      name: "MySQL",
      image: `${process.env.PUBLIC_URL}/image/aboutme/MySQL_logo.png`,
    },
    {
      name: "GitHub",
      image: `${process.env.PUBLIC_URL}/image/aboutme/github_logo.png`,
    },
  ];

  return (
    <section className="skills_section">
      <div className="textContent">
        <a className="skillTitle">SKILLS</a>
      </div>

      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill_icon" key={index}>
            <img src={skill.image} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
