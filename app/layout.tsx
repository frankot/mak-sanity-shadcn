import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Navbar2 from "@/components/navbar2";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mak",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-main"}>
        <div>
          <Navbar2 />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
