import React, { useState } from "react";
import "./App.scss";
import ChangePages from "./pages/ChangePages";

const App: React.FC = () => {
  return (
    <div className="Portfolio_container">
      <ChangePages />
    </div>
  );
};

export default App;
