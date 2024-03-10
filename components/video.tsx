"use client";

import { useState, useEffect } from "react";
import "../app/styles/mouse.module.css";
export default function Video() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" pb-[94vh] lg:pb-0 lg:mb-[95vh]">
      <video
        className="absolute lg:top-0 -z-10 pb-10 lg:pb-0 h-screen w-screen object-cover "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/promo-vid.mp4" type="video/mp4" />
      </video>
      <div className="bottom-20 left-1/2 absolute" id="scroll-down-animation">
        <span className={`mouse ${isScrollingDown ? "hideAnim" : ""}`}>
          <span className="move "></span>
        
        </span>
      </div>
    </div>
  );
}
