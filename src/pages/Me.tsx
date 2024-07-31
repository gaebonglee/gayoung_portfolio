import React from "react";
import DrawingLines from "../components/me/DrawingLines";
import AboutMeNext from "../components/button/AboutMeNext";
import Skills from "../components/me/Skills";
import "../style/desktop/me/Me.scss";
import IntroText from "../components/me/IntroText";
import Info from "../components/me/Info";

const Me: React.FC = () => {
  return (
    <div className="me-container">
      <DrawingLines />
      <IntroText />
      <Info />
      <AboutMeNext />
      <Skills />
    </div>
  );
};

export default Me;
