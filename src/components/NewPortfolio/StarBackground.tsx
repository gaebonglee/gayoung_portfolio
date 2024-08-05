import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../../style/NewPortfolio/StarBackground.scss";

const StarBackground: React.FC = () => {
  useEffect(() => {
    gsap.to("#stars", { y: -2000, duration: 300, ease: "none", repeat: -1 });
    gsap.to("#stars2", { y: -2000, duration: 400, ease: "none", repeat: -1 });
    gsap.to("#stars3", { y: -2000, duration: 500, ease: "none", repeat: -1 });
    gsap.to("#stars4", { y: -2000, duration: 600, ease: "none", repeat: -1 });
  }, []);

  return (
    <section className="backgroundSection">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </section>
  );
};

export default StarBackground;
