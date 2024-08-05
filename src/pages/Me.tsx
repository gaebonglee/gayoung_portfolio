import React from "react";
import DrawingLines from "../components/me/DrawingLines";
import AboutMeNext from "../components/button/NextBtn";
import Skills from "../components/me/Skills";
import "../style/desktop/me/Me.scss";
import IntroText from "../components/me/IntroText";
import Info from "../components/me/Info";
import Imoge from "../components/me/Imoge";
import AboutMe from "../components/me/AboutMe";

const Me: React.FC = () => {
  return (
    <div className="me_container">
      <div className="meContentsWrap">
        <div className="body">
          <AboutMe />
          <Skills />
        </div>
        <div className="footer">
          <Info />
          <AboutMeNext />
        </div>
        {/* <DrawingLines /> */}
        {/* <Imoge />
      <IntroText />*/}
      </div>
    </div>
  );
};

export default Me;
