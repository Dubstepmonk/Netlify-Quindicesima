import "./ImageSlideShow.css";
import React, { useState, useEffect } from 'react';
import orchestral1 from "./resource/orchestral1.jpg"
import orchestral2 from "./resource/orchestral2.jpg"
import orchestral3 from "./resource/orchestral3.jpg"
import orchestral4 from "./resource/orchestral4.jpg"
import orchestral5 from "./resource/orchestral5.jpg"
import orchestral6 from "./resource/orchestral6.jpg"
import orchestral7 from "./resource/orchestral7.jpg"
function ImageSlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const orchestraImages=[
    orchestral6,
    orchestral7,
    orchestral1,
    orchestral2,
    orchestral3,
    orchestral4,
    // orchestral5
  ]

  const delay = 2500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === orchestraImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {orchestraImages.map((orchestralImage, index) => (
          <div
            className="slide"
            key={index}
            style={{ orchestralImage }}
          >
            <img src={orchestralImage} style={{maxWidth:"100%"}}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {orchestraImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlideShow