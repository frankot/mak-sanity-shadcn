import NewsFeatured from "@/components/NewsFeatured";
import Video from "@/components/video";






export default function Home() {

  return (
    <div className="min-h-[200vh]">
      <Video />
      <NewsFeatured />
      <div className="h-screen w-full bg-red-500">

      </div>
    </div>
  );
}
