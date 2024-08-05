import React, { useState } from "react";
import "./App.scss";
import { useInView } from "react-intersection-observer";
import Intro from "./components/intro/Intro";
import Me from "./pages/Me";
import StarBackground from "./components/StarBackground";

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      <div className="Portfolio_container">
        <StarBackground />
        <Intro />
        <Me />
      </div>
    </div>
  );
};

export default App;
