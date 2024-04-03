import { client, urlFor } from "@/lib/sanity";
import { newsCard } from "@/lib/interface";
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
export default async function NewsFeatured2() {
  const data: newsCard[] = await getData();
  return (
    <div className="container mx-auto">
      <div className="flex w-full relative isolate">
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
        <div className="flex relative bg-stone-100">
          <div className="w-1/2 relative">
            <Image
              src={urlFor(data[4].image).url()}
              height={1500}
              width={1500}
              alt="Featured news image"
              className=" max-h-[85vh] h-full object-cover"
            />{" "}
            <div className="inset-0 h-full w-full absolute  bg-stone-600 opacity-15 hover:opacity-0 duration-500"></div>
          </div>
          <div className="w-1/2 shadow p-20 pt-32 ">
            <h1 className="font-bold leading-10 tracking-tighter text-5xl text-stone-900">
              {data[0].title}
            </h1>
            <h3 className="text-stone-700 font-semibold mt-10 text-lg">
              {data[0].copy}
            </h3>
          </div>
          <div className="absolute bottom-6 right-20 bg-stone-100 px-4 py-2 font-semibold rounded-xl">
            <Link href={`/news/${data[0].currentSlug}`}>Czytaj dalej</Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-center  w-full">
        {data.map((news, idx) => (
          <div className=" flex bg-red-400 z-10 h-full" key={idx}>
            <div className="w-1/3">
              <Image
                src={urlFor(news.image).url()}
                height={1500}
                width={1500}
                className="h-full"
              />
            </div>
            <div className="w-3/4 h-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
