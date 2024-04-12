import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Partners from "./partners";

export default function Contact() {
  return (
    <div className="relative isolate lg:pt-16 bg-stone-100">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6  pt-24 sm:pt-32 lg:static lg:px-8 lg:pl-16  lg:pb-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 ">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-orange-100"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div> */}

            <h2 className="text-3xl font-bold tracking-tight text-orange-500">
              Skontaktuj się z nami
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Makakowy telefon odbieramy w godzinach otwarcia ściany. Jeżeli nie
              odbieramy, to pewnie się wspinamy, więc spróbujcie za kilka chwil
              ;-)
            </p>
            <div className="flex">
              <dl className="mt-12 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-orange-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    Palisadowa 20/22 <br />
                    01-940 Warszawa
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-orange-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:(+48) 730 710 775"
                    >
                      (+48) 730 710 775
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-orange-500"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:info@arenamakak.pl"
                    >
                      info@arenamakak.pl{" "}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-10 lg:ml-10 lg:pl-10 ml-5 pl-5 border-orange-500 border-l space-y-4 text-base leading-7 text-gray-600">
                <div className=" font-bold text-orange-500 flex items-center -ml-2 lg:-ml-6 ">
                  {" "}
                  <ClockIcon className="h-6 mr-2" aria-hidden="true" />
                  <p>Godziny Otwarcia</p>
                </div>
                <div className="">
                  <p>Poniedziałek 9-23</p>
                  <p>Wtorek 7-23</p>
                  <p>Środa 9-23</p>
                  <p>Czwartek 7-23</p>
                  <p>Piątek 9-23</p>
                  <p>Sob-Nied 9-22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl flex m-10 lg:m-0 lg:mr-10 relative">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.0388414660847!2d20.903975876884143!3d52.29714947200356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eca1c891bf83f%3A0x30bc9294aae1478a!2sArena%20Wspinaczkowa%20Makak!5e0!3m2!1sen!2spl!4v1711355395276!5m2!1sen!2spl"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" h-[25rem] lg:h-[32rem] m-5 my-auto rounded-xl "
          ></iframe>
        </div>
      </div>{" "}
    </div>
  );
}
