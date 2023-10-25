import React, { useEffect, useRef, useState } from "react";
import arrow from "../assets/img/down.png";
import main from "../assets/img/main.png";
import black_AL from "../assets/img/main/bl_al.png";
import black_rsg from "../assets/img/main/bl_rsg.png";
import black_pulse from "../assets/img/main/bl_pn.png";
import red_AL from "../assets/img/main/red_al.png";
import red_rsg from "../assets/img/main/red_rsg.png";
import red_pulse from "../assets/img/main/red_pn.png";
import { scrollToElement } from ".";

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
  const [typewriterText, setTypewriterText] = useState("");
  const [imageColor, setImageColor] = useState("red");
  const [, setIsAnimationInProgress] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  let i = 0;

  useEffect(() => {
    changeCompany();
  }, [activeCompanyIndex]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const changeCompany = () => {
    setActiveCompanyIndex(activeCompanyIndex);
    setTypewriterText(""); // Reset typewriterText to an empty string when changing companies
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    i = 0; // Reset the index when changing companies
    if (activeCompanyIndex > company.length - 1) {
      setActiveCompanyIndex(0);
    } else {
      startTypewriterAnimation(company[activeCompanyIndex].text);
    }
  };

  const startTypewriterAnimation = (text: any) => {
    setIsAnimationInProgress(true);

    const updateText = () => {
      if (i < text.length) {
        const currentChar = text[i];
        setTypewriterText((prevText) => prevText + currentChar);
        if (currentChar === " ") {
          setTypewriterText((prevText) => prevText + " "); // Add space to prevent typo / wrong sentence
        }
        i++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsAnimationInProgress(false);
        setTimeout(() => {
          setImageColor("black");
          setTimeout(() => {
            setImageColor("red");
            setActiveCompanyIndex((prev) => prev + 1);
          }, 1000);
        }, 1000);
      }
    };

    updateText(); // Call the to start the animation

    // Set an interval to continue updating the text
    intervalRef.current = setInterval(updateText, 80);
  };

  return (
    <>
      <div className="bg-black 3xl:px-40 lg:px-36 px-8 overflow-x-hidden">
        <div className="flex md:flex-row flex-col-reverse mx-auto items-center justify-center h-screen sm:h-auto sm:py-28 w-full  md:-mt-8">
          <div className="flex flex-col flex-1 md:mr-4 md:mt-0 mt-4 xl:pr-16">
            <h1 className="montserrat-bold font-bold lg:text-4xl text-2xl">
              EMPOWERING GAMING.
            </h1>
            <h1 className="montserrat-bold font-bold lg:text-4xl text-2xl">
              AMPLIFYING INFLUENCE.
            </h1>
            <h1 className="montserrat-bold font-bold lg:text-4xl text-2xl">
              ASIA'S BIGGEST GAMER COMMUNITY.
            </h1>
            <p className="airif text-[#6C6C6C] lg:text-lg text-sm mt-10 text-justify">
              ArkForge unites 805 million gamers worldwide through seamless gameplay, community, and technology. We champion sustainable gaming communities and lead in crafting a hyper-engaged global ecosystem.
            </p>
            <div className="flex flex-row gap-4 md:mt-24 mt-10">
              <button
                onClick={() => scrollToElement("contact")}
                type="button"
                className="border border-[#FF0000] hover:text-[#FF0000] hover:border-white rounded-md px-4 py-2  text-sm lg:text-lg"
              >
                CONTACT US
              </button>
              <button
                onClick={() => scrollToElement("nova")}
                type="button"
                className="border hover:border-[#FF0000] bg-black hover:bg-[#FF0000] rounded-md px-4 py-2 flex items-center gap-4 text-sm lg:text-lg"
              >
                DISCOVER NOW
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="md:-mt-16 mt-16 relative md:flex-1 mx-auto">
            <div className="flex justify-center">
              <img src={main} alt="Arkforge" className="md:ml-10" />
            </div>
            <div className="flex flex-row absolute 3xl:left-28 lg:left-14 md:left-10 2xl:top-72 lg:top-56 md:top-44 top-40 space-x-10">
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
                className={`airif text-[#CB0000] 2xl:text-3xl lg:text-xl text-[17px] line-1 ${
                  imageColor === "red"
                }`}
              >
                {typewriterText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
