import React, { useState, useEffect } from "react";
import IntroPage from "./NewPortfolio/IntroPage";
import MainLayout from "./NewPortfolio/MainLayout";
import Projects from "./NewPortfolio/Projects";
import "../style/pages/ChangePages.scss";

const ChangePages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<"intro" | "main" | "projects">(
    "intro"
  );
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (currentPage !== "intro") {
      setTimeout(() => {
        setSlideIn(true);
      }, 100);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === "main") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [currentPage]);

  const handleIntroNextClick = () => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentPage("main");
    }, 100);
  };

  const handleMainNextClick = () => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentPage("projects");
    }, 100);
  };

  return (
    <div className="PagesWrap">
      {currentPage === "intro" && (
        <IntroPage onNextClick={handleIntroNextClick} />
      )}
      {currentPage === "main" && (
        <MainLayout show={slideIn} onNextClick={handleMainNextClick} />
      )}
      {currentPage === "projects" && <Projects show={slideIn} />}
    </div>
  );
};

export default ChangePages;
