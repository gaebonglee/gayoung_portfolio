import React, { useEffect } from "react";
import "../../style/desktop/me/DrawingLines.scss";

const DrawingLines: React.FC = () => {
  return (
    <div className="line-container">
      <div className="verticalityLine">
        <div className="left"></div>
        <div className="middle"></div>
        <div className="right"></div>
      </div>
      <div className="horizontalLine">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default DrawingLines;
