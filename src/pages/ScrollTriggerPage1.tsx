import React from "react";
import IntroPage from "./NewPortfolio/IntroPage";
import Me from "./NewPortfolio/Me";
import StarBackground from "../components/NewPortfolio/StarBackground";

const ScrollTriggerPage1: React.FC = () => {
  return (
    <div className="ScrollTriggerPage1">
      {/* <StarBackground /> */}
      <IntroPage />
      {/* <Me /> */}
    </div>
  );
};

export default ScrollTriggerPage1;
