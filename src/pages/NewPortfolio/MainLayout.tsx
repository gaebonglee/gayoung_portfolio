import React, { useRef, useState } from "react";
import "../../style/NewPortfolio/me/MainLayout.scss";
import Icon from "../../components/NewPortfolio/me/Icon";
import Contents from "../../components/NewPortfolio/me/Contents";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

const MainLayout: React.FC = () => {
  const [selected, setSelected] = useState<
    "profile" | "skills" | "info" | null
  >("profile");
  const swiperRef = useRef<any>(null);

  const handleIconClick = (type: "profile" | "skills" | "info") => {
    setSelected(type);
    if (swiperRef.current) {
      const slideIndex = type === "profile" ? 0 : type === "skills" ? 1 : 2;
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  return (
    <section className="MainLayout_section">
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
        </div>
        <div className="content-display">
          <Swiper
            ref={swiperRef}
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={false}
            modules={[EffectCube, Pagination]}
            className="contentStyle"
          >
            <SwiperSlide>
              <Contents type="profile" />
            </SwiperSlide>
            <SwiperSlide>
              <Contents type="skills" />
            </SwiperSlide>
            <SwiperSlide>
              <Contents type="info" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
