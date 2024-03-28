"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 w-full z-50 ">
      <header
        className={`flex h-20 mx-4 rounded-b-xl lg:mx-6 shrink-0 items-center px-4 md:px-6 duration-300   ${
          isScrollingDown
            ? "bg-opacity-100 bg-orange-400  shadow-lg "
            : "bg-opacity-0"
        }`}
      >
        {" "}
        {/* MOBILE NAV */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
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
        <div className="w-full flex justify-between">
          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList className="">
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase text-white w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Servicesss</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {" "}
                  <Link
                    className="group inline-flex h-9 uppercase text-white w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                    href="#"
                  >
                    dsaddasdasdasdasd
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase text-white w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                  href="#"
                >
                  About
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase text-white w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                  href="#"
                >
                  Portfolio
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 uppercase text-white w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-semibold transition-colors hover:bg-orange-400 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                  href="#"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <Image src="/logo-makak-horW.png" width={250} height={500} className="text-red-500 mr-12"></Image>
          </div>
        </div>
      </header>{" "}
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
