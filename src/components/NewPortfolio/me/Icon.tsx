import React from "react";

interface IconProps {
  type: 'profile' | 'skills' | 'info';
}

const Icon: React.FC<IconProps> = ({ type }) => {
  let content;
  switch (type) {
    case 'profile':
      content = <p>PROFILE</p>;
      break;
    case 'skills':
      content = <p>SKILLS</p>;
      break;
    case 'info':
      content = <p>INFORMATION</p>;
      break;
    default:
      content = null;
  }

  return <div className={`icon ${type}_wrap`}>{content}</div>;
};

export default Icon;
