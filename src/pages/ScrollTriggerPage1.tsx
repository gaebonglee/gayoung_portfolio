import React from "react";
import IntroPage from "./NewPortfolio/IntroPage";
import Me from "./NewPortfolio/Me";
import StarBackground from "../components/NewPortfolio/StarBackground";
import Red from "../components/NewPortfolio/Red";

const ScrollTriggerPage1: React.FC = () => {
  return (
    <div className="ScrollTriggerPage1">
      <IntroPage />
      {/* <Red /> */}
    </div>
  );
};

export default ScrollTriggerPage1;
