import React from "react";
import DrawingLines from "../components/me/DrawingLines";
import AboutMeNext from "../components/button/AboutMeNext";
import Skills from "../components/me/Skills";
import "../style/desktop/me/Me.scss";
import IntroText from "../components/me/IntroText";
import Info from "../components/me/Info";
import Imoge from "../components/me/Imoge";
import AboutMe from "../components/me/AboutMe";
import Github from "../components/me/Github";

const Me: React.FC = () => {
  return (
    <div className="me_container">
      <div className="header">
        <Github />
      </div>
      <div className="body">
        <AboutMe />
        <Skills />
      </div>
      <div className="footer">
        <Info />
      </div>
      {/* <DrawingLines /> */}
      {/* <Imoge />
      <IntroText />
      
      <AboutMeNext /> */}
    </div>
  );
};

export default Me;
