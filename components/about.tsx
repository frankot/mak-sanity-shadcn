import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="relative mt-32">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                src="/s5.jpg"
                width={2000}
                height={2000}
                alt="Makak full photo"
                className="absolute inset-0 h-full w-full lg:rounded-r-3xl object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-base font-semibold leading-7 text-orange-400">
                Poznaj nas
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Piękny Makak
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Makak to największa w Warszawie centrala wspinaczkowa z drogami
                do 18 metrów w pionie i 30 metrów w przewieszeniu. Prawie 2900
                metrów kw. ściany. Ogromna hala do wspinania z liną, 104
                stanowiska. Ponad 200 dróg o trudnościach od 4 do 8a. Taśmy
                autoasekuracyjne. Obwodownia, kampus i Moonboard. Nowoczesna
                boulderownia (500 m.kw. panelu w pierwszym etapie)! Strefa dla
                dzieci. Sklep ze sprzętem wspinaczkowym. Bar z pyszną kawą. I
                wyjątkowy kot Mak.{" "}
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  Budując Makaka naśladowaliśmy naturalną skałę. Chcieliśmy,
                  żeby wielkość panelu i charakter wspinania przypominały
                  najlepsze rejony wspinaczkowe Europy. Na warszawskie Bielany
                  udało nam się przenieść niemal wszystkie formacje skalne
                  występujące w przyrodzie. Mamy „zacięcia”, kanty,
                  „przewieszki”, „filary”, połogi i imponujący dach
                  zaprojektowany na całej szerokości hali. W pierwszej hali z
                  liną znajdziecie ponad 200 dróg o różnym stopniu trudności. Co
                  tydzień/dwa zdejmujemy i kręcimy nowe. Żeby nie było nudno 
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Lubimy się wspinać
                      </strong>{" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Największy rejon wspinaczkowy na mazowszu{" "}
                      </strong>{" "}
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-orange-400"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Wspinanie jest dla każdego
                      </strong>{" "}
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  W drugiej hali (wejście pod makakową antresolą) zbudowaliśmy
                  pyszny ogródek boulderowy, z dwiema setkami przystawek od
                  najlepszych routesetterów z Polski i Europy. Niemal 2900
                  metrów kw. panelu łącznie daje każdemu wspinaczowi niemal
                  nieogranicznone możliwości treningowe. Makak jest ścianą
                  przyjazną zarówno początkującym jak i zaawansowanym
                  wspinaczom. Dzieciom (odkąd potrafią chodzić), dorosłym i
                  seniorom. 7 dni w tygodniu, świątek piątek, latem i zimą.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Wspinanie jest dla wszystkich!
                </h2>
                <p className="mt-6">
                  Tych, którzy dopiero zaczynają się wspinać, na Makaku, uczymy
                  bezpiecznej asekuracji, technik wspinaczkowych i
                  wspinaczkowego savoir-vivreu. Zaawansowani wspinacze mają do
                  dyspozycji stale zmieniający się zestaw dróg o urozmaiconych
                  trudnościach, od 4 (bardzo łatwo) nawet do 8c (ekstremalnie
                  trudno; wyceny według tzw. francuskiej skali trudności
                  wspinaczkowych), a także możliwość zmierzenia się z
                  największym przewieszeniem w Polsce, gdzie drogi osiągają
                  długość nawet 30 metrów. Dla tych, którym brakuje partnera do
                  wspinaczki, mamy urządzenia do autoasekuracji - taśmy, na
                  których można wspinać się w pojedynkę. Jest też ścianka
                  zaprojektowana z myślą o dzieciach, nawet tych najmłodszych
                  (3+) oraz plac zabaw z mysią dziurą i zjeżdzalniami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
