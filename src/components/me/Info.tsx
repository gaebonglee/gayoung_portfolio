import React from "react";
import "../../style/desktop/me/Info.scss";

const Info: React.FC = () => {
  return (
    <section className="infoSection">
      <div className="infoContainer">
        <div className="infoText_wrap">
          <div className="info name">
            <a>LEE GA YOUNG</a>
            <a className="age">1998.01.21</a>
          </div>
          <div className="info univ">
            <a>Department of stereoscopic molding at Kyonggi University</a>
          </div>
          <div className="info email">
            <a>2gayoung.2da@gmail.com</a>
          </div>
        </div>
        <svg className="lineShape topLine" viewBox="0 0 200 50">
          <polyline points="0,50 50,0 200,0" />
        </svg>
        <svg className="lineShape bottomLine" viewBox="0 0 200 50">
          <polyline points="0,0 150,0 200,50" />
        </svg>
      </div>
    </section>
  );
};

export default Info;
