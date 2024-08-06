import React, { useState } from "react";
import "../../style/NewPortfolio/me/MainLayout.scss";
import Icon from "../../components/NewPortfolio/me/Icon";
import Contents from "../../components/NewPortfolio/me/Contents";

const MainLayout: React.FC = () => {
  const [selected, setSelected] = useState<
    "profile" | "skills" | "info" | null
  >(null);

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
            onClick={() => setSelected("profile")}
          >
            <Icon type="profile" />
          </div>
          <div
            className="icon-item"
            id="item2"
            onClick={() => setSelected("skills")}
          >
            <Icon type="skills" />
          </div>
          <div
            className="icon-item"
            id="item3"
            onClick={() => setSelected("info")}
          >
            <Icon type="info" />
          </div>
        </div>
        <div className="content-display">
          {selected && <Contents type={selected} />}
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
