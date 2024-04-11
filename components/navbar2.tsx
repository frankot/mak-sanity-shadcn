"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { log } from "console";

const menuItems = [
  { name: "O nas", href: "/" },
  { name: "Co robimy", href: "/about" },
  { name: "Cennik", href: "/services" },
  { name: "Aktualności", href: "/portfolio" },
  { name: "Inne", href: "/contact" },
  { name: "Kontakt", href: "/blog" },
];
const subItems = [
  { name: "Regulamin", href: "/regulamin" },
  { name: "Vouchery", href: "/vouchery" },
];

export default function Nav2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInne, setIsInne] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 400; 
      const scrolled = window.scrollY;
      if (scrolled > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleInne = () => {
    setIsInne(!isInne);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative  flex w-full items-center">
        {pathname === "/" ? (
          <button
            className={`${isOpen && "hidden "}  m-10 mt-24 lg:mt-[90px] ml-0 fixed -top-10 left-14 z-40 `}
            onClick={toggleMenu}
          >
            {" "}
            <svg
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16  ml-2 text-orange-500 bg-stone-800 rounded-full p-2 bg-opacity-40 
  "
            >
              <path
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        ) : (
          <button></button>
        )}

        <button className={ `${
              isScrolled && " rotate-180 "
            } fixed right-4 top-[90vh] z-50 duration-1000`}>
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 text-orange-500 bg-stone-800 rounded-full p-2 bg-opacity-40 "
          >
            <path
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "opacity-0 " : ""
          } absolute  transition-all ease-in-out duration-700  top-0 z-30 justify-center mt-10  flex w-full`}
        >
          {" "}
          <Image
            src="/logo-makak-horO5.png"
            height={1000}
            width={1000}
            className="h-14 mt-6 ml-8 md:m-0 md:h-20   w-auto"
          />
        </div>
      </div>
      <div
        ref={menuRef}
        className={`${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        } fixed z-30  h-full`}
      >
        <div
          className={`
                        h-screen w-[75vw] lg:w-[33vw]  bg-orange-500  px-10 py-4 transition-all relative duration-500 flex flex-col justify-between ease-out ${
                          isOpen
                            ? "translate-x-0 "
                            : "-translate-x-[73vw] lg:-translate-x-[32vw] "
                        }`}
        >
          <ul className="flex flex-col gap-y-2 text-black tracking-tighter capitalize font-semibold py-16 pr-5 text-2xl">
            {menuItems.map((item, idx) => (
              <li
                className="hover:translate-x-2  w-fit px-4 py-2 duration-300 transition rounded-xl"
                key={idx}
              >
                {item.name === "Inne" ? (
                  <div>
                    <button onClick={toggleInne} className="flex items-center ">
                      <span>Inne</span>
                      <svg
                        className="h-6"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="none"
                        stroke-width="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                    </button>
                    <div
                      className={`${
                        isInne ? "translate-x-0 " : "hidden -translate-x-44"
                      } flex duration-1000 transition-all ease-in-out ml-2 gap-y-2 text-md text-stone-700 flex-col`}
                    >
                      {subItems.map((inn, idx) => (
                        <Link key={idx} onClick={toggleMenu} href={item.href}>
                          {inn.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link onClick={toggleMenu} href={item.href}>
                    {item.name}
                  </Link>
                )}
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
