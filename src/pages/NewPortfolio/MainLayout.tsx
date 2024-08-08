import React, { useRef, useState, useCallback } from "react";
import "../../style/pages/MainLayout.scss";
import Icon from "../../components/NewPortfolio/me/Icon";
import Contents from "../../components/NewPortfolio/me/Contents";
import LayoutNext from "../../components/NewPortfolio/button/LayoutNext";
import Github from "../../components/NewPortfolio/me/Github";
import Projects from "../../pages/NewPortfolio/Projects";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

interface MainLayoutProps {
  show: boolean;
  onNextClick: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ show, onNextClick }) => {
  const [selected, setSelected] = useState<
    "profile" | "skills" | "info" | null
  >("profile");
  const [resetAnimation, setResetAnimation] = useState<boolean>(false);
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const swiperRef = useRef<any>(null);

  const handleIconClick = (type: "profile" | "skills" | "info") => {
    setSelected(type);
    if (swiperRef.current) {
      const slideIndex = type === "profile" ? 0 : type === "skills" ? 1 : 2;
      swiperRef.current.swiper.slideTo(slideIndex);
      setResetAnimation(true);
      setTimeout(() => setResetAnimation(false), 0);
    }
  };

  const handleSlideChange = useCallback(() => {
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 0);
  }, []);

  const LayoutNextClick = () => {
    setShowProjects(true);
    setTimeout(() => {
      onNextClick();
    }, 100); 
  };

  return (
    <section className={`MainLayout_section ${show ? "slide-in" : ""}`}>
      <div className="layoutLine_container">
        <div className="vertical-line left"></div>
        <div className="vertical-line right"></div>
        <div className="horizontal-line top"></div>
        <div className="horizontal-line bottom"></div>
        <div className="icon-container">
          <div
            className="icon-item"
            id="item1"
            onClick={() => handleIconClick("profile")}
          >
            <Icon type="profile" />
          </div>
          <div
            className="icon-item"
            id="item2"
            onClick={() => handleIconClick("skills")}
          >
            <Icon type="skills" />
          </div>
          <div
            className="icon-item"
            id="item3"
            onClick={() => handleIconClick("info")}
          >
            <Icon type="info" />
          </div>
          <div className="icon-item" id="item4">
            <Github />
          </div>
        </div>
        <div className="content-display">
          <Swiper
            ref={swiperRef}
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCube, Pagination]}
            className="contentStyle"
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide key={resetAnimation ? "profile-reset" : "profile"}>
              <Contents type="profile" resetAnimation={resetAnimation} />
            </SwiperSlide>
            <SwiperSlide key={resetAnimation ? "skills-reset" : "skills"}>
              <Contents type="skills" resetAnimation={resetAnimation} />
            </SwiperSlide>
            <SwiperSlide key={resetAnimation ? "info-reset" : "info"}>
              <Contents type="info" resetAnimation={resetAnimation} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ButtonWrap">
          <div className="NextBtn">
            <LayoutNext onClick={LayoutNextClick} />
          </div>
        </div>
      </div>
      {showProjects && <Projects show={showProjects} />}
    </section>
  );
};

export default MainLayout;
