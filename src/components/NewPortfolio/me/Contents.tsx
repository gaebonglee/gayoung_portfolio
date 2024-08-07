import React from "react";
import Profile from "./Profile";
import Skills from "./Skills";
import Info from "./Info";

interface ContentsProps {
  type: "profile" | "skills" | "info";
}

const Contents: React.FC<ContentsProps> = ({ type }) => {
  let contentText;
  switch (type) {
    case "profile":
      contentText = <Profile />;
      break;
    case "skills":
      contentText = <Skills/>;
      break;
    case "info":
      contentText = <Info/>
      break;
    default:
      contentText = null;
  }
  return <div className={`icon ${type}_wrap`}>{contentText}</div>;
};

export default Contents;
