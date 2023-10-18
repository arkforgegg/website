import rsg from "../assets/img/navigation/rsg.png";
import nova from "../assets/img/navigation/pulse_nova.png";
import aghs from "../assets/img/navigation/aghs.png";
import { useEffect, useState } from "react";
import { TopArrow } from "../components";
import { useStoreContext } from "../Context/Store";

const navs = [
  {
    title: "PULSE NOVA",
    image: nova,
  },
  {
    title: "RSG",
    image: rsg,
  },
  {
    title: "AGHS LAB",
    image: aghs,
  },
];

export function Navigation() {
  const { navStat } = useStoreContext();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToElement = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-between lg:w-full xl:px-16">
      <button onClick={scrollToTop} className="flexcenter gap-3 hidden lg:flex">
        <TopArrow />
        <p className="airif text-[#4B4B4B] text-[18px]">Back to Top</p>
      </button>
      <div className="sticky top-0 airif flex items-center justify-between my-10 gap-2 sm:gap-10 sm:px-5 text-[16px] bg-[#1313131] border border-[#5E5E5E] py-3 px-2 rounded-md">
        {navs.map((nav, i) => (
          <button
            className={`${
              navStat === "rsg" ? "bg-[#4B4B4B]" : ""
            } flexcenter gap-1 rounded-md px-1 sm:px-4 py-2`}
            key={i}
          >
            <img src={nav.image} alt="" />
            <p>{nav.title}</p>
          </button>
        ))}
      </div>
      <button
        onClick={() => scrollToElement("contact")}
        className="flexcenter gap-3 hidden lg:flex"
      >
        <div className="rotate-180">
          <TopArrow />
        </div>
        <p className="airif text-[#4B4B4B] text-[18px]">Contact Us</p>
      </button>
    </div>
  );
}
