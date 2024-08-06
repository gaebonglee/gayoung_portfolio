import React from "react";
import "../../style/NewPortfolio/me/MainLayout.scss";
import Info from "../../components/NewPortfolio/me/Info";
import AboutMeNext from "../../components/NewPortfolio/button/NextBtn";
import AboutMe from "../../components/NewPortfolio/me/AboutMe";
import Skills from "../../components/NewPortfolio/me/Skills";

const MainLayout: React.FC = () => {
  return (
    <section className="MainLayout_section">
      <div className="layoutLine_container">
        <div className="vertical-line left"></div>
        <div className="vertical-line right"></div>
        <div className="horizontal-line top"></div>
        <div className="horizontal-line bottom"></div>
      </div>
    </section>
  );
};

export default MainLayout;
