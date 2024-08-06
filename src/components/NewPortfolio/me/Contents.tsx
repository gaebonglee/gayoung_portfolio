import React from "react";

interface ContentsProps {
  type: "profile" | "skills" | "info";
}

const Contents: React.FC<ContentsProps> = ({ type }) => {
  let contentText;
  switch (type) {
    case "profile":
      contentText = <p>PROFILE text!</p>;
      break;
    case "skills":
      contentText = <p>SKILLS text!</p>;
      break;
    case "info":
      contentText = <p>INFORMATION text!</p>;
      break;
    default:
      contentText = null;
  }
  return <div className={`icon ${type}_wrap`}>{contentText}</div>;
};

export default Contents;

