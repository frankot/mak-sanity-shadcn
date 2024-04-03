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

const ACTIVITIES = [
  {
    id: 1,
    name: "Lead climbing",
    icon: "/icons/icon1.png",
    desc: "Lead climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 2,
    name: "Bouldering",
    icon: "/icons/icon2.png",
    desc: "Lead1 climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 3,
    name: "Kursy",
    icon: "/icons/icon3.png",
    desc: "Lead 2climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 4,
    name: "Zajęcia",
    icon: "/icons/icon4.png",
    desc: "Lead c3limbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 5,
    name: "Pytania",
    icon: "/icons/icon5.png",
    desc: "Lead 24climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
];
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
      
      <Ab />

      <Activities acts={ACTIVITIES} />
      {/* <LineBreak /> */}
      <Kursy />

      <NewsFeatured />
      <NewsFeatured2/>
      {/* <LineBreak /> */}
      {/* <About /> */}
      <CarouselMobile photos={PHOTOS_SLIDES}/>
      <CarouselDesktop photos={PHOTOS_SLIDES}/>

      <Partners />
    </div>
  );
}
