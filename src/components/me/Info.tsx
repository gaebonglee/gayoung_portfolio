import React, { useEffect, useState } from "react";
import "../../style/desktop/me/Info.scss";

const Info: React.FC = () => {
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);

  const errorHTML = `<div className="info">
            <h3>LEE GA YOUNG</h3>
            <p>1998.01.21</p>
            <p>Department of stereoscopic molding at Kyonggi University</p>
            <p>2gayoung.2da@gmail.com</p>
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
    <section className="infoSection">
      <div className="infoContainer">
        <div className="infoText_wrap">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <svg className="lineShape InfoTopLine" viewBox="0 0 200 50">
          <defs>
            <filter id="neon">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polyline points="0,20 50,0 300,0" className="neonLine" />
        </svg>
        <svg className="lineShape InfoBottomLine" viewBox="0 0 200 50">
          <defs>
            <filter id="neon">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polyline points="0,0 150,0 200,50" className="neonLine" />
        </svg>
      </div>
    </section>
  );
};

export default Info;
