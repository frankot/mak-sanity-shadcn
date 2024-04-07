import { client, urlFor } from "@/lib/sanity";
import { newsCard } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";
import Title from "./ui/title";
import NewsCard from "./ui/newsCard";
async function getData() {
  const query = `*[_type == 'newsArticle'] | order(_createdAt asc){
      title,
        copy,
        date,
        "currentSlug": slug.current,
        image
    }`;
  const news = await client.fetch(query);
  return news;
}
export default async function NewsFeatured2() {
  const news: newsCard[] = await getData();
  return (
    <div className="  sm:px-10 mx-auto pt-10 my-12 mt-44 overflow-x-hidden">
      {/* <h1 className="text-4xl mx-72 w  mt-44 mb-16 border-b-8 border-orange-400 font-bold tracking-tight  sm:text-6xl">
        Aktualności
      </h1> */}
              <Title title="Aktualności"/>

      <div className="flex w-full relative isolate">
        <div>
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
        </div>

        <div className="flex md:flex-row relative bg-opacity-10  rounded-3xl  bg-stone-800 hover:bg-stone-100 duration-500 group max-h-[70vh] ">
          <div className="w-1/2 relative rounded-l-3xl overflow-hidden ">
            <Image
              src={urlFor(news[0].image).url()}
              height={1500}
              width={1500}
              alt="Featured news image"
              className="h-full  object-cover  group-hover:scale-105 duration-200"
            />{" "}
            {/* <div className="inset-0 h-full w-full absolute  bg-stone-600 opacity-15 hover:opacity-0 duration-500"></div> */}
          </div>
          <div className="w-1/2 shadow-xl p-20 ">
            {/* <hr className=" h-1 bg-orange-400 mx-4 mb-2   " /> */}

            <h1 className="font-bold leading-10 tracking-tighter text-5xl text-stone-800">
              {news[0].title}
            </h1>
            <hr className=" h-1 bg-orange-400  mt-2" />

            <h3 className="text-stone-700 font-semibold mt-10 text-lg">
              {news[0].copy}
            </h3>
          </div>
          <div className="absolute bottom-4 right-5">
            <button className=" uppercase inline-flex items-center rounded-full bg-orange-400 px-3 py-2 text-center text-base font-medium text-white ">
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
        </div>
      </div>
      <div className="grid px-4 sm:px-12 pt-10  md:px-0 grid-cols-1 lg:grid-cols-2 gap-x-8 mt-5  w-full">
        {news.slice(1, 5).map((news, idx) => (
          <NewsCard className="bg-opacity-10  bg-stone-800 " newsItem={news} key={idx} />
          //   <article
          //     key={news.id}
          //     className="relative isolate group flex flex-col cursor-pointer shadow-xl justify-end overflow-hidden rounded-lg bg-gray-900 px-8 pb-8 pt-80 sm:pt-48"
          //   >
          //     {/* <img src=url={{$`news.imageUrl`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" /> */}
          //     <Image
          //       src={urlFor(news.image).url()}
          //       width={500}
          //       height={500}
          //       alt=""
          //       className="-z-10 inset-0 absolute h-full w-full object-cover group-hover:scale-105 duration-200"
          //     />
          //     <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-900" />

          //     <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          //       <time dateTime={news.datetime} className="mr-8">
          //         {news.date}
          //       </time>
          //     </div>
          //     <h3 className="mb-3 text-lg font-semibold leading-6 text-white">
          //       <Link href={`/news/${news.currentSlug}`}>
          //         <span className="absolute inset-0" />
          //         {news.title}
          //       </Link>
          //     </h3>
          //     <h4 className="text-stone-100">{news.copy}</h4>
          //     {/* <div className="bg-stone-200 w-full absolute bottom-0 left-0 flex items-center justify-between px-6 py-2 ">
          //         <div>01.02.24</div>
          //         <button className="bg-orange-400 px-4 py-1">Czytaj</button>
          //     </div> */}
          //   </article>
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
