import React from "react";
import "../../style/desktop/me/Info.scss";

const Info: React.FC = () => {
  return (
    <section className="sideInfo">
      <div className="infoText_wrap">
        <div className="info name">
          <a>이가영</a>
          <a className="age">1998.01.21</a>
        </div>
        <div className="info univ">
          <a>Kyunggi Univ.</a>
        </div>
        <div className="info email">
          <a>2gayoung.2da@gmail.com</a>
        </div>
        <div className="info github">
          <a
            href="https://github.com/gaebonglee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
