import nova from "../assets/img/navigation/pulse_nova.png";
import rsg from "../assets/img/navigation/rsg.png";
import kyoCardsLogo from "../assets/img/navigation/kyo_cards.png";
import jinadaLogo from "../assets/img/navigation/jinada.png";
import { useEffect, useState } from "react";
import { GrayArrow } from "../components";

const navs = [
  {
    title: "PULSE NOVA",
    image: nova,
    id: "nova",
  },
  {
    title: "KYO CARDS",
    image: kyoCardsLogo,
    id: "kyocards",
  },
  {
    title: "JINADA",
    image: jinadaLogo,
    id: "jinada",
  },
  {
    title: "RSG",
    image: rsg,
    id: "rsg",
  },
];

export function Navigation() {
  const [currentSection, setCurrentSection] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionIds = ["nova", "kyocards", "jinada", "rsg"];
      let found = false;

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 5;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            if (currentSection !== sectionId) {
              setCurrentSection(sectionId);
            }
            found = true;
          }
        }
      });
      if (!found) {
        setCurrentSection("default");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="sticky top-0 left-0 right-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm border-b border-[#3a3a3a]">
      <div className="hidden lg:flex items-center justify-between w-full xl:px-16 py-2">
        <button onClick={scrollToTop} className="flexcenter gap-3">
          <GrayArrow />
          <p className="airif text-[#4B4B4B] text-[18px]">Back to Top</p>
        </button>
        <div className="airif flex items-center justify-between gap-10 text-[16px] bg-[#1313131] border border-[#5E5E5E] py-1 px-2 rounded-md">
          {navs.map((nav, i) => (
            <a
              href={`#${nav.id}`}
              className={`${
                currentSection === nav.id ? "bg-[#4B4B4B]" : ""
              } flexcenter gap-3 rounded-md px-4 py-1 no-underline`}
              key={i}
            >
              <img
                src={nav.image}
                alt=""
                className="h-[35px] w-[38px] object-contain"
              />
              <b className="montserrat-bold">{nav.title}</b>
            </a>
          ))}
        </div>
        <a href="#contact" className="flexcenter gap-3 no-underline">
          <div className="rotate-180">
            <GrayArrow />
          </div>
          <p className="airif text-[#4B4B4B] text-[18px]">Contact Us</p>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-3 w-full">
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="flexcenter shrink-0"
        >
          <GrayArrow className="w-[14px] h-[14px]" />
        </button>
        <div className="flex items-center justify-between border border-[#5f5f5f] rounded-[7px] p-[4.7px] w-[235px]">
          {navs.map((nav, i) => (
            <a
              href={`#${nav.id}`}
              aria-label={nav.title}
              className={`${
                currentSection === nav.id ? "bg-[#474747]" : ""
              } flexcenter rounded-[6px] px-[9px] py-[6px] no-underline`}
              key={i}
            >
              <img
                src={nav.image}
                alt=""
                className="h-[21px] w-[22px] object-contain"
              />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          aria-label="Contact Us"
          className="flexcenter shrink-0 no-underline"
        >
          <div className="rotate-180">
            <GrayArrow className="w-[14px] h-[14px]" />
          </div>
        </a>
      </div>
    </div>
  );
}
