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


const PHOTOS_SLIDES = [
  "/Slideshow/s1.jpg",
  "/Slideshow/s2.jpg",
  "/Slideshow/s3.jpg",
  "/Slideshow/s4.jpg",
  "/Slideshow/s5.jpg",
];
export default function Home() {
  return (
    <div className="overscroll-y-contain">
      <Video />
      
      {/* <Activities /> */}
      <Ab />

      {/* <LineBreak /> */}
      {/* <  /> */}

      {/* <NewsFeatured /> */}
      <NewsFeatured2/>
      {/* <LineBreak /> */}
      {/* <About /> */}
      <CarouselMobile photos={PHOTOS_SLIDES}/>
      <CarouselDesktop photos={PHOTOS_SLIDES}/>

     
      <Contact/>
      {/* <Partners /> */}
    </div>
  );
}
