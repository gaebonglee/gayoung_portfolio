import React from "react";
import "../../style/NewPortfolio/intro/IntroPage.scss";

const IntroPage: React.FC = () => {
  return (
    <section className="IntroSection">
      <div className="introContainer">
        <div className="textWrap">
          <div className="subTitle">
            <a>Lee Ga Young</a>
          </div>
          <h1 className="h1_top">
            <span className="char p">P</span>
            <span className="char o">o</span>
            <span className="char r">r</span>
            <span className="char t">t</span>
          </h1>
          <h1 className="h1_bottom">
            <span className="char f">f</span>
            <span className="char o2">o</span>
            <span className="char l">l</span>
            <span className="char i">i</span>
            <span className="char o3">o</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
