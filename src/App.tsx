import React from "react";
import "./App.scss";
// import Background from "./components/Background";
// import Intro from "./pages/Intro";
// import AboutMe from "./pages/AboutMe";
// import Projects from "./pages/Projects";
import IntroPage from "./pages/IntroPage";

const App: React.FC = () => {
  return (
    <div className="Portfolio_container">
      {/* <Background />
      <div className="PortfolioContent_container">
        <Intro />
        <AboutMe />
        <Projects />
      </div> */}
      <IntroPage />
    </div>
  );
};

export default App;