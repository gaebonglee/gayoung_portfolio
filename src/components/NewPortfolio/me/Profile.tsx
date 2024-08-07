import React from "react";
import "../../../style/NewPortfolio/me/Profile.scss";

const Profile: React.FC = () => {
  return (
    <section className="ProfileSection">
      <div className="textWrap">
        <h3>안녕하세요! 주니어 프론트엔드 개발자 이가영입니다.</h3>
        <p>저는 입체조형학과에서 창의적이고 세심한 디자인 감각을 키웠습니다.</p>
        <p>
          디지털 시대에 더 넓은 영향력을 발휘하고자 웹 개발에 관심을 가지게
          되었으며, 디자인과 기술을 결합한 최고의 사용자 경험(UX)을 제공하기
          위해 프론트엔드 개발을 선택했습니다.
        </p>
        <p>
          다양한 도전과 경험을 통해 얻은 기술 스택을 바탕으로 더 많은 사람들에게
          가치를 전달하는 프론트엔드 개발자가 되고 싶습니다.
        </p>
      </div>
    </section>
  );
};

export default Profile;
