import React from "react";
import IntroPage from "./NewPortfolio/IntroPage";
import MainLayout from "./NewPortfolio/MainLayout";
import "../style/pages/ChangePages.scss";

const ChangePages: React.FC = () => {
  return (
    <div className="PagesWrap">
      <IntroPage />
      <MainLayout />
    </div>
  );
};

export default ChangePages;
