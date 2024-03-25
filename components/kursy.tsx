import Image from "next/image";
const posts = [
  {
    id: 1,
    title: "Jak zacząć - krótki przewodnik",
    description: "Twój pierwszy raz na ścianie, czyli od czego zacząć",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/21/makak-5-urodziny-126-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Wprowadzenie do wspinania",
    description: "Zajęcia wprowadzające z instruktorem",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/22/makak-5-urodziny-097-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "I etap: Szkolenie z asekuracji górnej",
    description:
      "Jak zacząć wspinać się z liną, czyli ABC wspinania z górną asekuracją",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/7/makak-001-sierpnia-04-2021_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 4,
    title: "II etap: Kurs wspinania z dolną asekuracją",
    description:
      "Kurs przygotowujący do samodzielnego wspinania z dolną asekuracją",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/8/kurs-asekuracji-013-lipca-03-2023_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "III etap: Przygotowanie do wspinania sportowego w skałach",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/22/makak-5-urodziny-097-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 6,
    title:
      "IV etap: Przygotowanie do wspinania sportowego na drogach wielowyciągowych",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/22/makak-5-urodziny-097-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 7,
    title: "Sekcje wspinaczkowe dla dorosłych",
    description:
      "Grupowe zajęcia wspinaczkowe dla początkujących i zaawansowanych",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/22/makak-5-urodziny-097-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 8,
    title: "Dziecięce sekcje wspinaczkowe",
    description: "Zajęcia wspinaczkowe dla dzieci",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/22/makak-5-urodziny-097-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 9,
    title: "Trening z instruktorem",
    description: "Zajęcia w wybranym przez Ciebie terminie",
    imgUrl:
      "https://arenamakak.pl/web/pageFiles/static/22/makak-5-urodziny-097-listopada-30-2019_700x500.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
];

export default function Kursy() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl ">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl md:text-7xl h-fit bg-gradient-to-r from-orange-400 via-orange-800 to-stone-800 inline-block text-transparent py-2 bg-clip-text">
          Szkolenia{" "}
        </h2>
        <p className="mt-2 text-lg leading-8 ">
          Szkolenia, zajęcia z instruktorem, sekcje wspinaczkowe i kursy{" "}
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 md:grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.slice(0, 6).map((post) => (
          <article
            key={post.id}
            className="relative isolate group flex flex-col cursor-pointer justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48"
          >
            {/* <img src=url={{$`post.imageUrl`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" /> */}
            <Image
              src={post.imgUrl}
              width={500}
              height={500}
              alt=""
              className="-z-10 inset-0 absolute h-full w-full object-cover group-hover:scale-110 duration-200"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time dateTime={post.datetime} className="mr-8">
                {post.date}
              </time>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <h4 className="text-white">{post.description}</h4>
          </article>
        ))}
        
      </div>
      <button className="flex justify-center  mx-auto px-4 py-2 rounded-3xl text-main font-bold tracking-wider uppercase my-10 bg-orange-400 hover:translate-y-1 hover:shadow-lg duration-200">Wszystkie</button>
    </div>
  );
}
