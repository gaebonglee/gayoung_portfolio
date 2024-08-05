import React, { useState } from "react";
import "../../../style/NewPortfolio/button/NextBtn.scss";

const AboutMeNext: React.FC = () => {
  const [text, setText] = useState<string>("NEXT PAGE");
  const [originalText, setOriginalText] = useState<string>("NEXT PAGE");
  const [hovered, setHovered] = useState<boolean>(false);

  const randomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#%$*&";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const randomizeText = (text: string) => {
    return text
      .split("")
      .map((char) => (char === " " ? " " : randomChar()))
      .join("");
  };

  const handleMouseOver = () => {
    if (!hovered) {
      setHovered(true);
      const interval = setInterval(() => {
        setText(randomizeText(originalText));
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setText(originalText);
        setHovered(false);
      }, 1000);
    }
  };

  return (
    <div className="positionDiv">
      <button className="AboutMeButton" onMouseOver={handleMouseOver}>
        <span className="word">{text.split(" ")[0]}</span>
        <span className="whiteSpace"> </span>
        <span className="word">{text.split(" ")[1]}</span>
      </button>
    </div>
  );
};

export default AboutMeNext;
