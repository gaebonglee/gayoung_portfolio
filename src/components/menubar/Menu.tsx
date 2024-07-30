import React from "react";

export const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <nav className={`menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>Intro</li>
        <li>About Me</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
};
