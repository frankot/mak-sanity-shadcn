"use client";

import { useState, useEffect } from "react";
import "../app/styles/mouse.module.css";
import Image from "next/image";
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
    <div className="youtube-container relative h-screen w-screen ">
      {/* <video
        className="absolute lg:top-0 lg:left-0 z-10  h-screen w-screen object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        <source src="/promo-vid.mp4" type="video/mp4" />
      </video> */}
      <iframe
        className="absolute lg:top-0 lg:left-0 z-10  h-screen w-screen object-contain"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=81Duk7SF-Mo&showinfo=0&controls=0&end=15"
        allowFullScreen
        allow="autoplay"
      />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-stone-900 via-gray-900/40" />

      {/* <Image src="/logo-makak.png" width={500} height={500} className="absolute top-20 left-1/3 z-30"/> */}
      <div className="bottom-20 left-1/2 absolute " id="scroll-down-animation">
        <span className={`mouse ${isScrollingDown ? "hideAnim" : ""}`}>
          <span className="move "></span>
        </span>
      </div>
    </div>
  );

}
