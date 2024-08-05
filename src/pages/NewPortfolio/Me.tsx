import React from "react";
import { useInView } from "react-intersection-observer";
import "../../style/NewPortfolio/me/Me.scss";
import Info from "../../components/NewPortfolio/me/Info";
import AboutMeNext from "../../components/NewPortfolio/button/NextBtn";
import AboutMe from "../../components/NewPortfolio/me/AboutMe";
import Skills from "../../components/NewPortfolio/me/Skills";

const Me: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={`MePage ${inView ? "in-view" : ""}`} ref={ref}>
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
