"use client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function NewsArt({ data }) {
  const router = useRouter();
  return (
    <>
      <div className="text-center relative  pb-20">
        {" "}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  ">
          {data.title}{" "}
        </h1>
        <p className="text-base font-semibold leading-7 mt-2 text-orange-500">
          23 Marzec 2024 15:00
        </p>
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute uppercase  bottom-3 left-[9%] inline-flex duration-300 hover:bg-orange-500 hover:-translate-x-1 items-center rounded-full bg-orange-400 px-10 py-2 text-center text-xs lg:text-base font-medium text-white "
        >
          {" "}
          <svg
            className="h-5 pr-2"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>Cofnij</span>
        </button>{" "}
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 ">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="mt-6 prose text-xl leading-8 text-gray-700">
                <PortableText value={data.content} />
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden hover:scale-110 duration-300 ">
          <Image
            src={urlFor(data.image).url()}
            className="ml-5 lg:ml-0 rounded drop-shadow-2xl"
            height={500}
            width={500}
            alt="ssdsad"
          />
        </div>
        {/* <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
