import NewsFeatured from "@/components/NewsFeatured";
import About from "@/components/about";
import Partners from "@/components/partners";
import Ab from "@/components/ab";
import Video from "@/components/video";
import Activities from "@/components/Activities";
import LineBreak from "@/components/ui/lineBreak";
import Kursy from "@/components/kursy";
import CarouselMobile from "@/components/carouselMobile";
import CarouselDesktop from "@/components/carouselDeskop";
import NewsFeatured2 from "@/components/NewsFeatured2";
import Contact from "@/components/contact";
import NewsFeatured3 from "@/components/newsFeatured3";
import Title from "@/components/ui/title";

const PHOTOS_SLIDES = [
  "/Slideshow/s1.jpg",
  "/Slideshow/s2.jpg",
  "/Slideshow/s3.jpg",
  "/Slideshow/s4.jpg",
  "/Slideshow/s5.jpg",
];

export default function Home() {
  return (
    <div className="overscroll-y-contain bg-stone-100">
      <Video />
      
        {" "}
        <Ab />
        <NewsFeatured2 />
   

      {/* <hr  className="h-1 bg-orange-400 mt-16 mb-20 mx-20"/> */}

      {/* <LineBreak /> */}
      {/* <About /> */}
      <CarouselMobile photos={PHOTOS_SLIDES} />
      <CarouselDesktop photos={PHOTOS_SLIDES} />
      {/* <hr className="h-2   w-screen bg-orange-500  mb-6" /> */}

      <Contact />

      <Partners />
    </div>
  );
}
