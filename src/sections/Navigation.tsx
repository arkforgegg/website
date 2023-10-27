import rsg from "../assets/img/navigation/rsg.png";
import nova from "../assets/img/navigation/pulse_nova.png";
import aghs from "../assets/img/navigation/aghs.png";
import { useEffect, useState } from "react";
import { GrayArrow } from "../components";
// import { useStoreContext } from "../Context/Store";

const navs = [
  {
    title: "PULSE NOVA",
    image: nova,
    id: "nova",
  },
  {
    title: "RSG",
    image: rsg,
    id: "rsg",
  },
  {
    title: "AGHS LABS",
    image: aghs,
    id: "aghs",
  },
];

export const scrollToElement = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

export function Navigation() {
  // const {} = useStoreContext();
  const [currentSection, setCurrentSection] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionIds = ["aghs", "nova", "rsg"];
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
    <div className="sticky top-0 flex items-center md:justify-center lg:justify-between md:w-full xl:px-16 z-50 bg-black opacity-90 border-b border-[#5E5E5E]">
      <button onClick={scrollToTop} className="flexcenter gap-3 hidden lg:flex">
        <GrayArrow />
        <p className="airif text-[#4B4B4B] text-[18px]">Back to Top</p>
      </button>
      <div className="airif flex items-center justify-between my-3 gap-2 sm:gap-10 sm:px-5 xs:text-[8px] text-[16px] bg-[#1313131] border border-[#5E5E5E] py-1 px-2 rounded-md">
        {navs.map((nav, i) => (
          <button
            onClick={() => scrollToElement(nav.id)}
            className={`${
              currentSection === nav.id ? "bg-[#4B4B4B]" : ""
            } flexcenter gap-1 rounded-md px-1 sm:px-4 py-2`}
            key={i}
          >
            <img src={nav.image} alt="" />
            <b className="montserrat-bold">{nav.title}</b>
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollToElement("contact")}
        className="flexcenter gap-3 hidden lg:flex"
      >
        <div className="rotate-180">
          <GrayArrow />
        </div>
        <p className="airif text-[#4B4B4B] text-[18px]">Contact Us</p>
      </button>
    </div>
  );
}
