import { client } from "@/lib/sanity";
import { newsCard } from "@/lib/interface";
import NewsCard from "@/components/ui/newsCard";
import NewsCard2 from "@/components/ui/newsCard2";
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
export default async function News() {
  const data: newsCard[] = await getData();
  return (
    <div className="md:mx-10 lg:mx-24 py-24 sm:py-32">
      <hr className="h-1 bg-orange-400 mt-16 mb-20 mx-20" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Aktualności
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Bądź na bieżąco!{" "}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl  md:grid-cols-2 gap-4 md:gap-6 lg:mx-0 lg:max-w-none  lg:grid-cols-3 ">
          {data.map((post, idx) => (
            <NewsCard2 newsItem={post} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
