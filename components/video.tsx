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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate video loaded state after some delay (replace with actual event)
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="video-background relative h-screen w-screen  ">
      <iframe
        src="https://player.vimeo.com/video/932368948?background=1#t=0m5s"
        width="640"
        height="360"
        onLoadedMetadata={() => setIsLoading(false)} // Update loading state on video meta data load
      ></iframe>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-stone-900 via-gray-900/40" />
      {isLoading && ( // Show image only while loading
        <Image
          src="/placeholder.png" // Replace with your image path
          fill={true}
          alt="Video Preview"
          className="absolute top-0 left-0  object-cover"
          priority={true}
        />
      )}
      {/* Rest of your component */}
    </div>
  );
}
