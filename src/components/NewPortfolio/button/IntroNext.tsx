import React from "react";
import "../../../style/NewPortfolio/button/IntroNext.scss";

interface IntroNextProps {
  onClick: () => void;
}

const IntroNext: React.FC<IntroNextProps> = ({ onClick }) => {
  return (
    <button className="nextButton" onClick={onClick}>
      Next Page
    </button>
  );
};

export default IntroNext;
