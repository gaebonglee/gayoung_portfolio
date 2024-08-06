import React, { useEffect, useRef } from "react";
import "../../style/NewPortfolio/intro/IntroPage.scss";

const IntroPage: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ballRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = 1000; // 최대 스크롤 높이
        const x = Math.min(scrollY * 0.5, maxScroll / 2);
        const y = Math.min(
          0.001 * Math.pow(scrollY - maxScroll / 2, 2),
          maxScroll
        );

        ballRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="IntroPage">
      <div className="ball" ref={ballRef}></div>
      {/* <section className="IntroSection">
        <div className="textWrap">
          <div className="subTitle">
            <a>Lee Ga Young</a>
          </div>
          <h1 className="h1_top">
            <span className="char p">P</span>
            <span className="char o">o</span>
            <span className="char r">r</span>
            <span className="char t">t</span>
          </h1>
          <h1 className="h1_bottom">
            <span className="char f">f</span>
            <span className="char o2">o</span>
            <span className="char l">l</span>
            <span className="char i">i</span>
            <span className="char o3">o</span>
          </h1>
        </div>
        <div className="ball" ></div>
      </section> */}
    </div>
  );
};

export default IntroPage;
