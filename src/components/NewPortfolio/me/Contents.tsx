import React from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Info from "./Info";
import "../../../style/NewPortfolio/me/Content.scss";

interface ContentsProps {
  type: "profile" | "skills" | "info";
  resetAnimation: boolean;
}

const Contents: React.FC<ContentsProps> = ({ type, resetAnimation }) => {
  let contentText;
  switch (type) {
    case "profile":
      contentText = <Profile resetAnimation={resetAnimation} />;
      break;
    case "skills":
      contentText = <Skills resetAnimation={resetAnimation} />;
      break;
    case "info":
      contentText = <Info resetAnimation={resetAnimation} />;
      break;
    default:
      contentText = null;
  }
  return <div className={`Content ${type}_wrap`}>{contentText}</div>;
};

export default Contents;
