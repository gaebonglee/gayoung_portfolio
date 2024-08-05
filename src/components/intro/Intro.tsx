import React from "react";
import "../../style/desktop/intro/Intro.scss";
import IntroText from "./IntroText";
import IntroNext from "../button/IntroNext";

const Intro: React.FC = () => {
  return (
    <section className="IntroSection">
      <IntroText />
      {/* <IntroNext /> */}
    </section>
  );
};

export default Intro;
