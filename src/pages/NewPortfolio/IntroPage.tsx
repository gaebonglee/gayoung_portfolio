import React from "react";
import { useInView } from "react-intersection-observer";
import "../../style/NewPortfolio/intro/IntroPage.scss"
import Menubar from "../../components/NewPortfolio/menubar/Menubar";

const IntroPage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="IntroPage">
      <section className={`IntroSection ${inView ? "in-view" : ""}`} ref={ref}>
        <div className="lineStyle">
          <div className="textWrap">
            <h1>Hello!</h1>
            <h1>Welcome To</h1>
            <h1>My Portfolio</h1>
          </div>
        </div>
      </section>
      {/* <Menubar /> */}
    </div>
  );
};

export default IntroPage;
