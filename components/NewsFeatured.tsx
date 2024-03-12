import { newsCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "./ui/newsCard";
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
    <div className="bg-stone-100 py-32">
      <h1 className="text-center mb-32 tracking-widest font-bold text-3xl uppercase border-b-4 pb-4 mx-44 border-orange-400">
        Aktualności
      </h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl lg:divide-x divide-orange-400 flex-col items-center justify-between gap-x-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full mb-20 group hover:shadow-xl  border rounded-xl overflow-hidden hover:bg-stone-200/25 duration-500 lg:max-w-lg lg:flex-auto">
            <Link href={data[0].currentSlug}>
              <h2 className="text-3xl pt-4 px-5 font-bold tracking-tight text-gray-900 sm:text-4xl group-hover:text-orange-400 duration-300">
                {data[0].title}{" "}
              </h2>
              <p className="py-6 text-lg  leading-7 text-gray-600 group-hover:text-gray-800 duration-300 px-5">
                {data[0].copy}
              </p>
              <Image
                src={urlFor(data[0].image).url()}
                height={800}
                width={800}
                className=" h-full group-hover:scale-[1.01]  duration-1000  rounded-t-2x object-cover "
                alt={data[0].title}
              />{" "}
            </Link>
          </div>
          <div className="w-full lg:max-w-2xl lg:flex-auto mt-10 lg:pl-10">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y ">
              {data.slice(1).map((news, idx) => (
                <NewsCard newsItem={news} key={idx} />
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pl-8 pt-8">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-orange-400 hover:text-indigo-500"
              >
                View all openings <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
