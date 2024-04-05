import Image from "next/image";

const ACTIVITIES = [
  {
    id: 1,
    name: "Lead climbing",
    icon: "/icons/icon1.png",
    desc: "Lead climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 2,
    name: "Bouldering",
    icon: "/icons/icon2.png",
    desc: "Lead1 climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 3,
    name: "Kursy",
    icon: "/icons/icon3.png",
    desc: "Lead 2climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 4,
    name: "Zajęcia",
    icon: "/icons/icon4.png",
    desc: "Lead c3limbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
  {
    id: 5,
    name: "Pytania",
    icon: "/icons/icon5.png",
    desc: "Lead 24climbing (or leading) is a technique in rock climbing where the lead climber clips their rope to the climbing protection as they ascend a pitch of the climbing route, while their second (or belayer) remains at the base of the route belaying the rope to protect the lead climber in the event that they fall.",
  },
];
export default function Activities() {
  return (
    <div className="max-w-2xl  lg:max-w-7xl mx-auto -mt-16 mb-32 ">
      {" "}
      {/* <Title title="Aktywności" subtitle="Jako możesz się u nas bawić?" /> */}
      <div className=" flex flex-wrap justify-center gap-10 lg:gap-16 items-center ">
        {ACTIVITIES.map((act) => (
          <div
            key={act.id}
            className="lg:hover:scale-110 transform duration-300 grid place-items-center  rounded-xl p-4"
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
                className=" mr-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
              >
                <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" />
              </svg>

              <div className="font-semibold  uppercase tracking-widest">
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
