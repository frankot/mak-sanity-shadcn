import Image from "next/image";
import Title from "./ui/title";
export default function Activities({ acts }) {
  return (
    <div className="max-w-2xl  lg:max-w-7xl mx-auto mt-28 -mb-32 ">
      {" "}
      {/* <Title title="Aktywności" subtitle="Jako możesz się u nas bawić?" /> */}
      <div className=" flex flex-wrap justify-center gap-10 lg:gap-16 items-center ">
        {acts.map((act) => (
          <div
            key={act.id}
            className="lg:hover:scale-110 lg:hover:bg-white transform duration-300 grid place-items-center  rounded-xl p-4"
          >
            {/* <img className="mb-2 h-32 w-32" src={act.icon} alt="" /> */}
            <Image
              src={act.icon}
              height={300}
              width={300}
              alt={act.name}
              className="h-32 w-auto "
            />
            <div className="mt-6 grid grid-flow-col place-items-center">
              <svg
                className="fill-orange-400  mr-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
              >
                <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" />
              </svg>

              <div className="font-semibold uppercase tracking-widest">
                {act.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
``;
