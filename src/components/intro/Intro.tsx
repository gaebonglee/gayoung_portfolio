import React from "react";
import "../../style/desktop/intro/Intro.scss";
import StarBackground from "../StarBackground";

const Intro: React.FC = () => {
  return (
    <section className="IntroSection">
      <StarBackground />
      <div className="lineStyle">
        <div className="textWrap">
          <h1>Hello!</h1>
          <h1>Welcome To</h1>
          <h1>My Portfolio</h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
