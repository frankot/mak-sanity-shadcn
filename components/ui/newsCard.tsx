import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

export default function NewsCard({ className ,newsItem }) {
  return (
    <li className={className+" my-4  rounded-2xl flex  duration-300 border hover:shadow-xl  hover:bg-white z-10"} >
      <div className="h-[180px] w-[130px] lg:w-[160px] lg:h-[220px]  flex-shrink-0">
        <Image
          src={urlFor(newsItem.image).url()}
          height={1000}
          width={1000}
          className="object-cover h-full w-full rounded-l-2xl"
          alt={newsItem.title}
        />
      </div>
      <dl className="relative flex flex-wrap gap-x-3 pl-4 mt-2">
        <dt className="sr-only">Role</dt>
        <dd className="w-full mt-2 flex-none text-lg font-semibold tracking-tight text-gray-900">
          <Link href={`/news/${newsItem.currentSlug}`}>
            {newsItem.title}
            <span className="absolute inset-0" aria-hidden="true" />
          </Link>
          <hr className="my-2 mr-24 h-px  border-none bg-orange-400" />
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className=" px-1 w-full  flex-none text-base leading-7 text-gray-600">
          <div className=" line-clamp-2 lg:line-clamp-3"> {newsItem.copy}</div>
        </dd>
        <dt className="sr-only">Date</dt>
        <div className="relative w-full h-1/5 mb-2">
          <dd className="mt-4 absolute  bottom-0 text-sm  leading-7 text-gray-500">
            01.02.2024
          </dd>
          <button className="absolute uppercase bottom-0 right-5 inline-flex items-center rounded-full bg-orange-400 px-3 py-2 text-center text-xs lg:text-sm font-medium text-white ">
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
        </div>
      </dl>
    </li>
  );
}
