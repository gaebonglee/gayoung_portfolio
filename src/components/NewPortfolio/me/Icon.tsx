import React from "react";
import "../../../style/NewPortfolio/me/Icon.scss";

interface IconProps {
  type: "profile" | "skills" | "info";
}

const Icon: React.FC<IconProps> = ({ type }) => {
  let content;
  switch (type) {
    case "profile":
      content = <p className="title">PROFILE</p>;
      break;
    case "skills":
      content = <p className="title">SKILLS</p>;
      break;
    case "info":
      content = <p className="title">INFORMATION</p>;
      break;
    default:
      content = null;
  }

  return <div className={`icon ${type}_wrap`}>{content}</div>;
};

export default Icon;
