"use client";
import {  useRef, useEffect } from "react";
import Image from "next/image";
export default function CarouselDesktop({ className, photos }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        const scrollAmount = container.clientWidth / 5;
        const nextScrollLeft = (container.scrollLeft + scrollAmount) * 1.5;
        if (nextScrollLeft >= container.scrollWidth) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollTo({
            left: nextScrollLeft,
            behavior: "smooth",
          });
        }
      }, 4000);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", stopScrolling);
      container.removeEventListener("mouseleave", startScrolling);
    };
  }, []);
  return (
    <div
      className={
        "hidden lg:flex relative mx-auto justify-center  py-20 " +
        className
      }
    >
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory pb-4  gap-x-2 lg:gap-x-4 overflow-y-scroll"
      >
        {photos.map((photo, idx) => (
          <div key={idx} className="flex-shrink-0 snap-center">
            {/* <img
              className=" h-[35rem] rounded"
              src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            /> */}
            <Image
              src={photo}
              width={1000}
              height={5600}
              alt={`Carousel photo ${idx}`}
              className="rounded h-[35rem] w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
