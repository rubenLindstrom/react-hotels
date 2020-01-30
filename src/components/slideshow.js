import React, { useEffect, useState } from "react";
import { StyledHero } from "./atoms";

const Slideshow = ({ slideDuration, images, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex(prevState => (prevState + 1) % images.length);
    }, slideDuration);
    return () => clearTimeout(timeout);
  }, [currentIndex, images.length, slideDuration]);

  return (
    <div className="slideshow">
      {images.map((img, index) => (
        <StyledHero
          img={img}
          key={index}
          className={`slide${currentIndex === index ? " active" : ""}`}
        />
      ))}
      {children}
      <div className="controls">
        {images.map((_, index) => (
          <div
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
