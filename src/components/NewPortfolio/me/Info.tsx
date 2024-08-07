import React, { useEffect } from "react";
import "../../../style/NewPortfolio/me/Info.scss";

const Info: React.FC<{ resetAnimation: boolean }> = ({ resetAnimation }) => {
  useEffect(() => {
    if (resetAnimation) {
      const elements = document.querySelectorAll(
        ".infoText_wrap p, .infoText_wrap h3"
      );
      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty("--animation-delay", `${index * 0.1}s`);
        htmlEl.classList.remove("animate");
        setTimeout(() => {
          htmlEl.classList.add("animate");
        }, 10); // 짧은 지연시간 후에 클래스 추가
      });
    }
  }, [resetAnimation]);

  return (
    <section className="infoSection">
      <div className="infoContainer">
        <div className="infoText_wrap">
          <h3>LEE GA YOUNG</h3>
          <p>1998.01.21</p>
          <p>Department of stereoscopic molding at Kyonggi University</p>
          <p>2gayoung.2da@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
