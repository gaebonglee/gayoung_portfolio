import React from "react";
import "../../style/desktop/intro/Intro.scss";
import NextBtn from "../button/NextBtn";

const Intro: React.FC = () => {
  return (
    <section className="IntroSection">
      <div className="lineStyle">
          <div className="textWrap">
            <h1>Hello!</h1>
            <h1>Welcome To</h1>
            <h1>My Portfolio</h1>
          </div>
          <NextBtn />
        </div>
    </section>
  );
};

export default Intro;
