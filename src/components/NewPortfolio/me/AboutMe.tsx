import React, { useEffect, useState } from "react";
import "../../../style/NewPortfolio/me/AboutMe.scss";

const AboutMe: React.FC = () => {
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);

  const errorHTML = `<div className="textWrap">
          <h3>안녕하세요! 주니어 프론트엔드 개발자 이가영입니다.</h3>
          <p>
           저는 입체조형학과에서 창의적이고 세심한 디자인 감각을 키웠습니다. 
          </p>
          <p>
            디지털 시대에 더 넓은 영향력을 발휘하고자 웹 개발에 관심을 가지게 되었으며, 디자인과 기술을 결합한 최고의 사용자 경험(UX)을 제공하기 위해 프론트엔드 개발을 선택했습니다. 
          </p>
          <p>
            다양한 도전과 경험을 통해 얻은 기술 스택을 바탕으로 더 많은 사람들에게 가치를 전달하는 프론트엔드 개발자가 되고 싶습니다.
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
      <div className="aboutMeContainer">
        <div className="introWrap">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <svg className="lineShape MeBottomLine" viewBox="0 0 400 40">
          <defs>
            <filter id="neon">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polyline points="0,0 50,20 400,20" className="neonLine" />
        </svg>
      </div>
    </section>
  );
};

export default AboutMe;
