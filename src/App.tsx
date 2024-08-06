import React, { useState } from "react";
import "./App.scss";
import ScrollTriggerPage1 from "./pages/ScrollTriggerPage1";
import MainLayout from "./pages/NewPortfolio/MainLayout";

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      <div className="Portfolio_container">
        {/* <ScrollTriggerPage1 /> */}
        <MainLayout />
      </div>
    </div>
  );
};

export default App;
