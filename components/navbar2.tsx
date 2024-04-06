"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { it } from "node:test";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Nav2() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close menu when clicking outside
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isOpen ? "opacity-0 " : ""
        } absolute transition-all ease-in-out duration-700  top-0 z-30 justify-center mt-10  flex w-full`}
      >
        {" "}
        <Image
          src="/logo-makak-horO5.png"
          height={1000}
          width={1000}
          className="h-28 w-auto"
        />
      </div>
      <div ref={menuRef} className={` fixed z-30  h-full`}>
        <button className="m-10 mt-16 ml-0 absolute left-14" onClick={toggleMenu}>
          {" "}
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={`
             h-16 transition-all duration-300 ease-out ml-2 text-orange-500 bg-stone-800 rounded-full p-2 bg-opacity-50 ${
               isOpen ? "" : "-translate-x-10"
             }`}
          >
            <path
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div
          className={`
                        h-screen w-[33vw]  bg-orange-500  px-10 py-4 transition-all relative duration-300 flex flex-col justify-between ease-out ${
                          isOpen
                            ? "translate-x-0 "
                            : "-translate-x-[32vw] "
                        }`}
        >
          <ul className="flex flex-col gap-y-3 text-stone-800 tracking-tighter uppercase font-semibold py-10 pr-5 text-xl">
            {menuItems.map((item, idx) => (
              <li
                className="hover:translate-x-2 w-fit px-4 py-2 duration-300 transition rounded-xl"
                key={idx}
              >
                <Link onClick={toggleMenu} href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="absolute -right-24 top-44  rotate-90">
            {" "}
            <Image
              src="/logo-makak-horB.png"
              height={1000}
              width={1000}
              className="h-20  mx-auto my-10 w-auto"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="absolute bottom-2 right-16 hover:translate-x-2 text-stone-800 duration-300"
          >
            {" "}
            <svg
              className="h-20"
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
