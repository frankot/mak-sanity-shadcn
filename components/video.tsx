"use client";

import { useState, useEffect } from "react";
import "../app/styles/mouse.module.css";
import Image from "next/image";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
const features = [
  {
    name: "2900",
    description: "Metrów  ściany wspinaczkowej",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "104",
    description: "Stanowsika do wspinaczki linowej",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "200",
    description: "Dróg o trudnościach od 4 do 8a",
    href: "#",
    icon: ArrowPathIcon,
  },
];
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
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900 via-gray-900/40 " />

      {isLoading && ( // Show image only while loading
        <Image
          src="/placeholder.png" // Replace with your image path
          fill={true}
          alt="Video Preview"
          className="absolute left-0 top-0  object-cover"
          priority={true}
        />
      )}
      <div className="b-44 absolute z-20 flex h-screen w-screen items-center justify-center text-center text-6xl text-stone-100">
        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              {/* <h2 className="text-base font-semibold leading-7 text-orange-500">
                Arena Makak{" "}
              </h2> */}
              <p className="mt-2 text-3xl font-semibold tracking-tight text-orange-500 sm:text-4xl lg:text-7xl ">
                Największy rejon wspinaczkowy na Mazowszu{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
              Makak to największa w Warszawie centrala wspinaczkowa z drogami do 18 metrów w pionie i 30 metrów w przewieszeniu.
              Ogromna hala do wspinania z liną, obwodownia, kampus i Moonboard, nowoczesna boulderownia.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center text-5xl font-semibold text-orange-500">
             
                      {feature.name}
                    </dt>
                    <dd className="text-base w-fit text-gray-100">
                      <p className="">{feature.description}</p>
               
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
