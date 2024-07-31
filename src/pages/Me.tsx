import React from "react";
import DrawingLines from "../components/me/DrawingLines";
import AboutMeNext from "../components/button/AboutMeNext";
import "../style/desktop/me/Me.scss";

const Me: React.FC = () => {
  return (
    <div className="me-container">
      <DrawingLines />
      <AboutMeNext />
    </div>
  );
};

export default Me;
