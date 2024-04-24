import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
export default function NewsCard2({ newsItem }) {
  return (
    <Link href={`/news/${newsItem.currentSlug}`}>
      <div className="flex h-[475px] flex-col rounded-2xl bg-opacity-[.15] shadow-lg duration-300 hover:scale-[1.02] hover:bg-white">
        <div className="relative h-3/5 w-full ">
          <Image
            src={urlFor(newsItem.image).url()}
            fill={true}
            alt="Image of news article"
            sizes="22vh"
            className="rounded-t-2xl object-cover"
          />
        </div>
        <div className="relative h-2/5 overflow-hidden p-4">
          <h1 className="line-clamp-1 text-lg font-bold text-stone-900">
            {newsItem.title}
          </h1>
          <hr className="h-[3px] bg-orange-400 " />
          <p className="mt-4 line-clamp-3 text-stone-800">{newsItem.copy}</p>
          <button className="absolute bottom-3 right-3 inline-flex items-center rounded-full bg-orange-400 px-3 py-2 text-center text-xs font-medium uppercase text-white duration-300 hover:bg-orange-500 lg:text-sm ">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>{" "}
          <span className="absolute bottom-4 left-3 text-stone-700">
            24.03.23
          </span>
        </div>
      </div>
    </Link>
  );
}
