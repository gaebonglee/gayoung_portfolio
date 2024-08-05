import React from "react";
import AboutMeNext from "../components/button/NextBtn";
import Skills from "../components/me/Skills";
import "../style/desktop/me/Me.scss";
import Info from "../components/me/Info";
import AboutMe from "../components/me/AboutMe";


const Me: React.FC = () => {
  return (
    <section className="MePage">
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
        </div>
      </div>
    </section>
  );
};

export default Me;
