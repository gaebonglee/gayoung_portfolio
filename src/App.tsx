import React, { useState } from "react";
import "./App.scss";
import ScrollTriggerPage1 from "./pages/ScrollTriggerPage1";

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      <div className="Portfolio_container">
        <ScrollTriggerPage1 />
      </div>
    </div>
  );
};

export default App;
