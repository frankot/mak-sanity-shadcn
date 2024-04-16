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
    <div className="px-6  sm:px-10 md:px-24 mt-20 mx-auto overflow-x-hidden relative pt-20">
      {/* <h1 className="text-4xl mx-72 pb-3 my-20 border-b-8 border-orange-400 font-bold tracking-tight  sm:text-6xl">
        Aktualności
      </h1> */}
      {/* <Title title="Aktualności" /> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-0 mb-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-12">
            <div className="lg:max-w-lg relative">
              <h2 className="text-base font-semibold leading-7 text-orange-500">
                3 Marzec 2024 15:45
              </h2>
              <Link href={`/news/${news[0].currentSlug}`}>
                {" "}
                <p className="mt-2 text-3xl font-bold hover:underline tracking-tight text-gray-900 sm:text-4xl">
                  {news[0].title}
                </p>
              </Link>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                {news[0].copy}
              </p> */}
              <dl className=" mt-10 max-w-xl space-y-8 text-base leading-7 line-clamp-5 text-gray-600 lg:max-w-none">
                {/* {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))} */}{" "}
                <PortableText value={news[0].content} />{" "}
              </dl>
              <Link href={`/news/${news[0].currentSlug}`}>
                <button className="lg:absolute  -bottom-24 w-full   right-5 inline-flex items-center rounded-full hover:bg-orange-500 bg-orange-400 px-3 py-2 text-xs lg:text-lg  duration-300 font-medium text-white ">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first relative">
            {/* <img
              src={"https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            /> */}
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

      {/* <div className="">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-orange-600 opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
      </div> */}

      <div className="grid px-4 sm:px-12  md:px-0 grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-7xl mx-auto gap-8  w-full">
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
