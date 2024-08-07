import React from "react";
import "../../../style/NewPortfolio/button/LayoutNext.scss";
interface LayoutNextProps {
  onClick: () => void;
}

const LayoutNext: React.FC<LayoutNextProps> = ({ onClick }) => {
  return (
    <button className="LayoutNext" onClick={onClick}>
      Next Page
    </button>
  );
};

export default LayoutNext;
