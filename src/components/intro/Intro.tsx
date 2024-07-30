import React from "react";
// import { motion } from "framer-motion";
import Menubar from "../menubar/Menubar";
import "../../style/desktop/intro/Intro.scss";
import IntroText from "./IntroText";

const Intro: React.FC = () => {
  return (
    <section className="IntroSection">
      <IntroText />

      <button className="nextButton">Next Page</button>
    </section>
  );
};

export default Intro;
