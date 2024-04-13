import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
export default function NewsCard2({ newsItem }) {
  return (
    <Link href={`/news/${newsItem.currentSlug}`}>
    <div className="rounded-2xl flex flex-col h-[475px] bg-opacity-[.15] hover:bg-white hover:scale-[1.05] duration-300 shadow-lg">
      <div className="relative w-full h-3/5 ">
        <Image
          src={urlFor(newsItem.image).url()}
          fill={true}
          alt="Image of news article"
          sizes="23vh"
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 relative h-2/5 overflow-hidden">
        <h1 className="line-clamp-1 text-lg text-stone-900 font-bold">{newsItem.title}</h1>
        <hr className="h-[3px] bg-orange-400 " />
        <p className="mt-4 line-clamp-3 text-stone-800">{newsItem.copy}</p>
        <button className="absolute uppercase bottom-3 right-3 inline-flex duration-300 hover:bg-orange-500 items-center rounded-full bg-orange-400 px-3 py-2 text-center text-xs lg:text-sm font-medium text-white ">
          {" "}
          read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>{" "}
        <span className="absolute bottom-4 left-3 text-stone-700">24.03.23</span>
      </div>
    </div>
    </Link>
  );
}
