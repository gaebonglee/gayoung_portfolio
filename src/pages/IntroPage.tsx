import React from "react";
import Menubar from "../components/menubar/Menubar";
import Intro from "../components/intro/Intro";

const IntroPage: React.FC = () => {
  return (
    <div className="IntroPage">
      <Intro />
      <Menubar />
    </div>
  );
};

export default IntroPage;
