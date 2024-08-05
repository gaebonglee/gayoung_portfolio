import React, { useEffect, useState } from "react";
import "../../style/desktop/intro/IntroText.scss";

const IntroText: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`textWrap ${isScrolled ? "scrolled" : ""}`}>
      <h1>Hello!</h1>
      <h1>Welcome To</h1>
      <h1>My Portfolio</h1>
    </div>
  );
};

export default IntroText;
