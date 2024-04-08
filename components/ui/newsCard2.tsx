import Image from "next/image";
import { urlFor } from "@/lib/sanity";
export default function NewsCard2({ newsItem }) {
  return (
    <div className="rounded-2xl flex flex-col h-[220px]">
      <div className="relative w-full h-3/4">
        <Image
          src={urlFor(newsItem.image).url()}
          fill={true}
          alt="Image of news article"
        />
      </div>
      <div className="p-6">
        <h1>dupa</h1>
      </div>
    </div>
  );
}
