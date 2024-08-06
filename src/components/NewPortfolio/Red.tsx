import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../style/NewPortfolio/Red.scss";

gsap.registerPlugin(ScrollTrigger);

const Red: React.FC = () => {
  return <div className="redSection"></div>;
};

export default Red;
