"use client";

import React, { useState, useEffect, useRef } from "react";
import st from "../app/styles/slideshowPhotos.module.scss";

const delay = 2500;
import Image from "next/image";

function CarouselMobile({ photos }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [index]);

  return (
    <div className={st.slideshow + "  lg:hidden my-10 mx-auto"}>
      <div
        className={st.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {photos.map((imgUrl, index) => (
          <div className={st.slide + " relative"} key={index}>
            <Image
              src={imgUrl}
              alt={`Climbing gym image ${index + 1}`} // Provide alt text
              fill={true} // Fill the slide container
              objectFit="cover" // Scale to cover the container
            />
          </div>
        ))}
      </div>

      <div className={st.slideshowDots + ""}>
        {photos.map((_, idx) => (
          <div
            key={idx}
            className={`${st.slideshowDot} ${
              index == idx ? `${st.active}` : ""
            }`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CarouselMobile;
