import React, { useState, useEffect } from "react";
import IntroPage from "./NewPortfolio/IntroPage";
import MainLayout from "./NewPortfolio/MainLayout";
import "../style/pages/ChangePages.scss";

const ChangePages: React.FC = () => {
  const [showMainLayout, setShowMainLayout] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const handleNextClick = () => {
    setShowMainLayout(true);
    setTimeout(() => {
      setSlideIn(true);
    }, 10);
  };

  return (
    <div className="PagesWrap">
      {!showMainLayout && <IntroPage onNextClick={handleNextClick} />}
      {showMainLayout && <MainLayout show={slideIn} />}
    </div>
  );
};

export default ChangePages;
