import React, { useState, useEffect } from "react";
import IntroPage from "./NewPortfolio/IntroPage";
import MainLayout from "./NewPortfolio/MainLayout";
import Projects from "./NewPortfolio/Projects";

import "../style/pages/ChangePages.scss";

const ChangePages: React.FC = () => {
  const [showMainLayout, setShowMainLayout] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const IntroNextClick = () => {
    setShowMainLayout(true);
    setTimeout(() => {
      setSlideIn(true);
    }, 1);
  };

  const LayoutNextClick = () => {
    setShowMainLayout(true);
    setTimeout(() => {
      setSlideIn(true);
    }, 1);
  };

  return (
    <div className="PagesWrap">
      {!showMainLayout && <IntroPage onNextClick={IntroNextClick} />}
      {showMainLayout && (
        <MainLayout show={slideIn} onNextClick={LayoutNextClick} />
      )}
      <Projects />
    </div>
  );
};

export default ChangePages;
