import React, { useState, useEffect } from "react";
import "../../style/desktop/me/Imoge.scss";

const Imoge: React.FC = () => {
  const images = [
    `${process.env.PUBLIC_URL}/image/me/me1.jpg`,
    `${process.env.PUBLIC_URL}/image/me/me2.jpg`,
    `${process.env.PUBLIC_URL}/image/me/me3.jpg`,
    `${process.env.PUBLIC_URL}/image/me/me4.jpg`,
    `${process.env.PUBLIC_URL}/image/me/me5.jpg`,
    `${process.env.PUBLIC_URL}/image/me/me6.jpg`,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFlip(false);
      }, 500); 
    }, 2500); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="imogeSection">
      <div className="cards">
        <div
          className={`card ${flip ? "flip" : ""}`}
          style={{
            transform: `rotateY(${flip ? 180 : 0}deg)`,
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Card ${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Imoge;
