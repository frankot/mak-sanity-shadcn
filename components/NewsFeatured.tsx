import { newsCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "./ui/newsCard";
import Heading from "./ui/heading";
async function getData() {
  const query = `*[_type == 'newsArticle'] | order(_createdAt asc){
    title,
      copy,
      date,
      "currentSlug": slug.current,
      image
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function NewsFeatured() {
  const data: newsCard[] = await getData();
  return (
    <div className="bg-stone-100 py-32 container mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl lg:divide-x divide-orange-400 flex-col items-center justify-between gap-x-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full mb-20 group hover:shadow-xl  border rounded-xl overflow-hidden hover:bg-white duration-500 lg:max-w-lg lg:flex-auto">
            <Link href={`/news/${data[0].currentSlug}`}>
              <div className="relative w-full px-8 mt-8 mb-2 mx-auto">
                <dd className="text-base  leading-7 text-gray-500">
                  01.02.2024
                </dd>
                <button className="absolute uppercase bottom-0 right-5 inline-flex items-center rounded-full bg-orange-400 px-3 py-2 text-center text-base font-medium text-white ">
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
              <h2 className="text-3xl pt-4 px-5 font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data[0].title}{" "}
                <hr className="mt-4 mr-24 h-px  border-none bg-orange-400" />
              </h2>
              <p className="py-6 text-lg  leading-7 text-gray-600 group-hover:text-gray-800 duration-300 px-5">
                {data[0].copy}
              </p>
              <Image
                src={urlFor(data[0].image).url()}
                height={40}
                width={500}
                className="w-full h-[32rem] group-hover:scale-[1.01]  duration-1000  rounded-t-2x object-scale-down "
                alt={data[0].title}
              />{" "}
            </Link>
          </div>
          <div className="w-full lg:max-w-2xl lg:flex-auto mt-10 lg:pl-10">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y ">
              {data.slice(1, 5).map((news, idx) => (
                <NewsCard newsItem={news} key={idx} />
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pl-8 pt-8">
              <Link
                href="news"
                className="text-sm font-semibold leading-6 text-orange-400 hover:text-slate-600"
              >
                View all news <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
