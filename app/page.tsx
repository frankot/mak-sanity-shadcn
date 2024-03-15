import NewsFeatured from "@/components/NewsFeatured";
import About from "@/components/about";
import Partners from "@/components/partners";
import Ab from "@/components/ab";
import Video from "@/components/video";

export default function Home() {
  return (
    <div className=" bg-stone-100">
      <Video />
      <NewsFeatured />
      <About />
      <Ab />
      <Partners />
    </div>
  );
}
