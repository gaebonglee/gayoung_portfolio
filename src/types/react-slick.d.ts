declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    children?: React.ReactNode;
  }

  export default class Slider extends React.Component<Settings> {
    slickNext: () => void; // slickNext 메서드 추가
    slickPrev: () => void; // slickPrev 메서드 추가
  }
}
