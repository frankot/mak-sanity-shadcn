import { client, urlFor } from "@/lib/sanity";
import { newsCard } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";
import Title from "./ui/title";
import NewsCard2 from "./ui/newsCard2";

import { PortableText } from "next-sanity";

async function getData() {
  const query = `*[_type == 'newsArticle'] | order(_createdAt asc){
      title,
        copy,
        date,
        "currentSlug": slug.current,
        image,
        content
    }`;
  const news = await client.fetch(query);
  return news;
}
export default async function NewsFeatured2() {
  const news: newsCard[] = await getData();
  return (
    <div className="px-6 sm:px-10 md:px-24 lg:px-28 mt-20 mx-auto overflow-x-hidden relative pt-20 lg:max-w-[90rem]">
      {/* <h1 className="text-4xl mx-72 pb-3 my-20 border-b-8 border-orange-400 font-bold tracking-tight  sm:text-6xl">
        Aktualności
      </h1> */}
      {/* <Title title="Aktualności" /> */}
      <div className="mx-auto px-6 lg:px-0 mb-10">
        <div className="hidden  mx-auto lg:grid  sm:gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2">
          <div className="lg:ml-auto pl-6  lg:pt-12">
            <div className="lg:max-w-[33rem] relative">
              <h2 className="text-base font-semibold leading-7 text-orange-500">
                3 Marzec 2024 15:45
              </h2>
              <Link href={`/news/${news[0].currentSlug}`}>
                {" "}
                <p className="mt-2 text-3xl font-bold hover:underline tracking-tight text-gray-900 sm:text-4xl">
                  {news[0].title}
                </p>
              </Link>
  
              <dl className=" mt-10 max-w-xl space-y-8 text-base leading-7 line-clamp-5 text-gray-600 lg:max-w-none">
  
                <PortableText value={news[0].content} />{" "}
              </dl>
              <Link href={`/news/${news[0].currentSlug}`}>
                <button className="lg:absolute  -bottom-24    right-5 inline-flex items-center rounded-full hover:bg-orange-500 bg-orange-400 px-3 py-2 text-xs lg:text-lg  duration-300 font-medium text-white ">
                  {" "}
                  Czytaj Dalej
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
                      strokeidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first relative">
            <Image
              height={500}
              width={500}
              src={urlFor(news[0].image).url()}
              alt="featured news image"
              className="w-[48rem] h-fit max-h-[45rem] lg:max-h-[35rem] max-w-none rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>

      <div className="grid px-4 sm:px-12  md:px-0 grid-cols-1 lg:grid-cols-3  mx-auto gap-8  w-full">
        {news.slice(1, 4).map((news, idx) => (
          <NewsCard2 newsItem={news} key={idx} />
        ))}
      </div>
      <Link href="news" className="">
        <div className=" w-fit px-4 text-lg py-3  mx-auto mt-10 font-semibold text-stone-100 uppercase  rounded-full bg-orange-400">
          More news
        </div>
      </Link>
    </div>
  );
}
