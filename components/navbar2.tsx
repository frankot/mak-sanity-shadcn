"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150;
      const scrolled = window.scrollY;
      // Check if scrolled past landing page threshold
      setIsScrolled(scrolled > threshold);

      // Show/hide navbar based on scroll direction
      const scrolledUp = scrolled < prevScrollPos || scrolled < 300;
      setVisible(scrolledUp);
      setPrevScrollPos(scrolled);
      console.log("scrolled: "+scrolled);
      console.log("[prevScrollPos]: "+prevScrollPos);


    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isMain = usePathname() === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleInne = () => {
    setIsInne(!isInne);
  };
  const menuRef = useRef(null);

  const handleScrollDown = () => {
    window.scrollTo({
      top: isScrolled
        ? window.scrollY - window.innerHeight
        : window.scrollY + window.innerHeight * 1.24,
      behavior: "smooth",
    });
  };

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
      <div className={`fixed z-30  flex w-full items-center `}>
        <button
          className={`${isOpen && "hidden "}  ${
            visible ? "translate-y-0" : "-translate-y-32"
          } duration-1000 left-5 mt-[100px] lg:mt-[90px] ml-0 absolute -top-[4.5rem] lg:left-14 z-40 `}
          onClick={toggleMenu}
        >
          {" "}
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 p-2  ml-2 text-orange-500  rounded-full  bg-opacity-95 hover:bg-orange-500 hover:text-stone-800 duration-300 "
          >
            <path
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>

        <button
          onClick={handleScrollDown}
          className={`${
            isScrolled && " opacity-0 "
          } fixed right-7 top-[91vh] z-50 duration-1000 `}
        >
          <svg
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 text-orange-500 bg-stone-800 rounded-full p-2 bg-opacity-40 hover:bg-orange-500 hover:text-stone-800 duration-300 "
          >
            <path
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMain ? (
              <>
              
                ${isOpen && "opacity-0 "} $
                {isScrolled && " bg-stone-900 bg-opacity-95"}{" "}
              </>
            ) : (
              "bg-stone-800 "
            )
          }  ${isScrolled && " bg-stone-900 bg-opacity-95"}  ${
            visible ? "translate-y-0" : "-translate-y-full"
          }
          absolute transition-all ease-in-out  duration-700  top-0 z-30 justify-center py-3  flex w-full`}
        >
          {" "}
          <Image
            src="/logo-makak-horO5.png"
            height={1000}
            width={1000}
            className={`${
              isOpen && "opacity-0 "
            } duration-500 h-14 mt-6 ml-8 md:m-0 md:h-16   w-auto`}
            alt=" Horizontal orange Makak Logo"
          />
        </div>
      </div>

      <div 
        className={`${
          visible ? "translate-y-0 " : "-translate-y-96 "
        } fixed flex right-5 top-5 text-xl duration-500 z-40 text-orange-500`}
      >
        <div className="px-4 py-2 rounded-full bg-orange-500 text-stone-800 duration-300">
          <span>PL</span>
        </div>
        <div className="rounded-full px-4 py-2 ml-4 hover:bg-orange-500 hover:text-stone-800 duration-300">
          <span>ENG</span>
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
                            : "-translate-x-[73vw] lg:-translate-x-[33vw] "
                        }`}
        >
          <ul className="flex flex-col gap-y-2 text-black tracking-tighter capitalize font-semibold py-16 pr-5 text-2xl">
            {menuItems.map((item, idx) => (
              <li
                className="hover:bg-orange-400  w-fit px-4 py-2 duration-500  rounded-xl"
                key={idx}
              >
                {item.name === "Inne" ? (
                  <div>
                    <button
                      onClick={toggleInne}
                      className={`flex items-center `}
                    >
                      <span>Inne</span>
                      <svg
                        className="h-6 mt-2"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>{" "}
                    </button>
                    <div
                      className={`${
                        !isInne && "hidden"
                      } flex  ml-2 gap-y-2 text-[1.3rem] text-stone-800 flex-col`}
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
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
