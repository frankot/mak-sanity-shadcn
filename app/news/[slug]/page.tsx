import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
    *[_type == 'newsArticle' && slug.current =='${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        image
      }[0]
      
    `;
  const data = await client.fetch(query);
  return data;
}

export default async function NewsArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <div>
      <div className="flex flex-col container mx-auto p-32 ">
        <span className="text-3xl text-center">{data.title}</span>
        <span></span>
        <Image src={urlFor(data.image).url()} className="mx-auto"  height={500} width={500} alt="ssdsad" />

      </div>
    </div>
  );
}
