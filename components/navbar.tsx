"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import LineBreak from "./ui/lineBreak";

export function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > 125);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onHeroPage = usePathname() === "/";
  return (
    <div className="fixed top-0 w-full z-50 ">
      <header
        className={`flex h-16 shrink-0 items-center text-white px-4 md:px-24 duration-1000    ${
          isScrollingDown && onHeroPage
            ? "bg-opacity-100 bg-stone-800 shadow text-stone-100"
            : "bg-opacity-0"
        }
        ${
          !onHeroPage
            ? "bg-opacity-95 bg-stone-800 shadow-lg text-stone-100"
            : ""
        }
        `}
      >
        {" "}
        {/* MOBILE NAV */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden ml-4" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#">
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Home
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                About
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Services
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Portfolio
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        {/* DESKTOP NAV */}
        <Link className="mr-6 hidden lg:flex" href="#">
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="w-full flex justify-center lg:justify-between">
          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList className="">
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase  w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900  "
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-9 uppercase  w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900  ">
                  Servicess
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-stone-800 border-none">
                  {" "}
                  <Link
                    className="group inline-flex h-9 uppercase  w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900  "
                    href="#"
                  >
                    dsaddasdasdasdasd
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase  w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900  "
                  href="#"
                >
                  About
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase  w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900  "
                  href="#"
                >
                  Portfolio
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase  w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900  "
                  href="/contact"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Image
            src="/logo-makak-horW.png"
            width={250}
            height={500}
            className="text-red-500 lg:mr-12 mr-6 h-10 w-auto lg:w-52 lg:h-auto group"
          ></Image>
        </div>
      </header>{" "}
      {/* <LineBreak className="mt-0 mx-0 px-0"/> */}
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
