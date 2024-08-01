import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../style/desktop/StarBackground.scss";

const StarBackground: React.FC = () => {
  useEffect(() => {
    gsap.to("#stars", { y: -2000, duration: 50, ease: "none", repeat: -1 });
    gsap.to("#stars2", { y: -2000, duration: 100, ease: "none", repeat: -1 });
    gsap.to("#stars3", { y: -2000, duration: 150, ease: "none", repeat: -1 });
  }, []);

  return (
    <section className="backgroundSection">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>
  );
};

export default StarBackground;
