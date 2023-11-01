import React, { useEffect, useRef, useState } from "react";
import arrow from "../assets/img/down.png";
import main from "../assets/img/main.png";
import black_AL from "../assets/img/main/bl_al2.png";
import black_rsg from "../assets/img/main/bl_rsg.png";
import black_pulse from "../assets/img/main/bl_pn.png";
import red_AL from "../assets/img/main/red_al2.png";
import red_rsg from "../assets/img/main/red_rsg.png";
import red_pulse from "../assets/img/main/red_pn.png";
import { scrollToElement } from ".";
import { WhiteArrow } from "../components";

const company = [
  {
    id: 1,
    name: "Pulse Nova",
    image_black: black_pulse,
    image_red: red_pulse,
    text: "Empowering Influence, Creating Value",
  },
  {
    id: 2,
    name: "RSG",
    image_black: black_rsg,
    image_red: red_rsg,
    text: "SEA’s Premier Esports Organization",
  },
  {
    id: 3,
    name: "Aghs Labs",
    image_black: black_AL,
    image_red: red_AL,
    text: "Bridging Web2 to Web3",
  },
];

export function Introduction() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const [imageColor, setImageColor] = useState("red");
  const text = company[activeCompanyIndex].text;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCompanyIndex((prevIndex) =>
        prevIndex === company.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change text every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="bg-black 3xl:px-40 lg:px-36 px-8 overflow-x-hidden">
        <div className="flex md:flex-row flex-col-reverse mx-auto items-center justify-center h-screen sm:h-auto sm:py-28 w-full  md:-mt-8">
          <div className="flex flex-col flex-1 md:mr-4 md:mt-0 mt-4 xl:pr-16">
            <h1 className="montserrat-bold font-bold lg:text-4xl sm:text-2xl xs:text-sm text-center sm:text-left">
              EMPOWERING GAMING.
            </h1>
            <h1 className="montserrat-bold font-bold lg:text-4xl sm:text-2xl xs:text-sm text-center sm:text-left">
              AMPLIFYING INFLUENCE.
            </h1>
            <h1 className="montserrat-bold font-bold lg:text-4xl sm:text-2xl xs:text-sm text-center sm:text-left">
              ASIA'S BIGGEST GAMER COMMUNITY.
            </h1>
            <p className="airif text-[#6C6C6C] lg:text-lg text-sm mt-10 text-center sm:text-justify">
              ArkForge unites 500 million gamers worldwide through seamless
              gameplay, community, and technology. We champion sustainable
              gaming communities and lead in crafting a hyper-engaged global
              ecosystem.
            </p>
            <div className="flex flex-row gap-4 md:mt-24 mt-10 mb-20 sm:mb-0">
              <button
                onClick={() => scrollToElement("contact")}
                type="button"
                className="border border-[#FF0000] hover:text-[#FF0000] hover:border-white rounded-md px-4 py-2 xs:text-[9px] text-sm lg:text-lg"
              >
                CONTACT US
              </button>
              <button
                onClick={() => scrollToElement("nova")}
                type="button"
                className="border hover:border-[#FF0000] bg-black hover:bg-[#FF0000] rounded-md px-4 py-2 flex items-center xs:gap-[0.1rem] gap-4 xs:text-[9px] text-sm lg:text-lg flexcenter"
              >
                DISCOVER NOW
                <div className="rotate-90 w-3 xs:-mt-[0.45rem]">
                  <WhiteArrow />
                </div>
              </button>
            </div>
          </div>
          <div className="md:-mt-16 mt-16 relative md:flex-1 mx-auto">
            <div className="flex justify-center">
              <img src={main} alt="Arkforge" className="md:ml-10" />
            </div>
            <div className="flex flex-row absolute w-full justify-center md:left-2 2xl:top-72 lg:top-56 md:top-44 top-[9.5rem] space-x-8 xs:space-x-0 xs:top-32">
              {company.map((comp, index) => (
                <img
                  key={index}
                  onClick={() => {
                    setActiveCompanyIndex(index);
                  }}
                  src={
                    index === activeCompanyIndex
                      ? imageColor === "red"
                        ? comp.image_red
                        : comp.image_red
                      : comp.image_black
                  }
                  alt={comp.name}
                  className="2xl:w-36 lg:w-28 w-20 lg:-ml-2 cursor-pointer"
                />
              ))}
            </div>
            <div className="flex justify-center md:h-[40px] h-[28px] md:mt-10">
              <p
                className={`typewriter-text airif text-[#CB0000] 2xl:text-3xl lg:text-xl text-[17px] line-1 ${
                  imageColor === "red" ? "active" : ""
                }`}
              >
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
