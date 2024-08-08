import React, { useState } from "react";
import "./App.scss";
import ChangePages from "./pages/ChangePages";
import Project from "./components/NewPortfolio/Project";

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      <div className="Portfolio_container">
        {/* <ChangePages /> */}
        <Project />
      </div>
    </div>
  );
};

export default App;
