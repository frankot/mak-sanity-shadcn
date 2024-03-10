"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <div className="fixed top-0 w-full">
      <header className="flex h-20 rounded-lg bg-opacity-90 shadow-xl mx-10 mt-5 border-b-2 border-orange-400 bg-stone-100  shrink-0 items-center px-4 md:px-6 ">
        <Sheet>
          <div className="lg:hidden flex justify-between w-full">
            <SheetTrigger className="flex" asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <Image
            className="lg:hidden"
            src="/logo-makak-horB.png"
            height={20}
            width={180}
          />

          <SheetContent side="left">
            <Link className="mr-6 lg:hidden flex" href="#">
              <Image src="/logo-makak-horB.png" height={20} width={180} />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Homee
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
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link className="mr-2 mb-1 hidden items-center lg:flex" href="#">
          <Image src="/logo-makak-horB.png" height={20} width={180} />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="flex justify-between w-full items-center">
          <nav className="ml- hidden  lg:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {" "}
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm  font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                  href="#"
                >
                  Homea
                </Link>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group bg-opacity-0 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 ">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-10">
                    sadasd
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {" "}
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                    href="#"
                  >
                    Services
                  </Link>
                </NavigationMenuItem>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                  href="#"
                >
                  Contact
                </Link>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="hidden lg:flex">dsaas</div>
        </div>
      </header>
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
