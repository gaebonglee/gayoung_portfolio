import React, { useState } from "react";
import "../../style/desktop/button/AboutMeNext.scss";

const AboutMeNext: React.FC = () => {
  const [text, setText] = useState<string>("NEXT PAGE");
  const [originalText, setOriginalText] = useState<string>("NEXT PAGE");
  const [hovered, setHovered] = useState<boolean>(false); // hover 상태를 추적

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
      // hover 상태가 아니면 실행
      setHovered(true); // hover 상태로 설정
      const interval = setInterval(() => {
        setText(randomizeText(originalText));
      }, 250);

      setTimeout(() => {
        clearInterval(interval);
        setText(originalText);
        setHovered(false); // hover 상태 해제
      }, 2000);
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
