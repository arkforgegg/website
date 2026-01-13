import { Link } from "react-router-dom";
import logo from "../assets/img/ecosystem/jinada-logo.png";

import cardEcosystemIcon from "../assets/icons/card-ecosystem.svg";
import rewardsEngineIcon from "../assets/icons/rewards-engine.svg";
import communityAccessIcon from "../assets/icons/community-access.svg";

import { WhiteArrow } from "../components/Icons";
import { ServicesSwiper } from "../components/ServiceCard";

export function Jinada() {
  const keyCapabilities = [
    {
      icon: {
        src: cardEcosystemIcon,
        width: 196,
        height: 196,
      },
      name: "The ACG-First Card Ecosystem",
    },
    {
      icon: {
        src: rewardsEngineIcon,
        width: 196,
        height: 196,
      },
      name: "The ACG Rewards Engine",
    },
    {
      icon: {
        src: communityAccessIcon,
        width: 196,
        height: 196,
      },
      name: "The Community Access Layer",
    },
  ];

  return (
    <>
      <div
        id="jinada"
        className="relative flex flex-col items-center text-white px-5 lg:px-20 py-20 max-w-sm md:max-w-2xl lg:max-w-5xl"
      >
        <div className="max-w-[1400px] w-full flex flex-col">
          <img
            src={logo}
            alt="JINADA"
            className="w-[155px] lg:w-[375px] h-auto mb-4 lg:mb-6 mx-auto"
          />

          <p
            className="montserrat-bold text-[16px] lg:text-[20px] font-bold uppercase text-center mb-6 lg:mb-8 tracking-[0.8px] bg-clip-text"
            style={{
              background:
                "radial-gradient(100.09% 100.56% at 1.7% 66.67%, #FFF2DC 0%, #FFD48A 56.25%, #FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 35.696px rgba(255, 190, 74, 0.7)",
              lineHeight: "1.349",
            }}
          >
            incubation
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-4 lg:mb-6 leading-normal">
            The world's first cultural consumption platform built on the worlds
            of Anime, Collectibles and Games (ACG). JINADA brings together
            payments, rewards and fanaticism into a single ecosystem that turns
            everyday spending into cultural value.
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-8 lg:mb-12 leading-normal">
            From digital drops to physical collectibles, users unlock meaningful
            benefits shaped by the ACG communities they belong to.
          </p>

          <div className="flex items-center mb-6 lg:mb-8">
            <div
              className="w-[4px] lg:w-[6px] h-[18px] lg:h-[24px] mr-2 lg:mr-3"
              style={{ backgroundColor: "#C3831C" }}
            ></div>
            <p className="montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase text-white">
              KEY CAPABILITIES
            </p>
          </div>

          <ServicesSwiper
            items={keyCapabilities}
            arrowGradient={{
              from: "rgba(255, 190, 74, 0.9)",
              to: "rgba(195, 131, 28, 0.9)",
            }}
            textShadowColor="0px 0px 35.696px rgba(255, 190, 74, 0.7)"
            textGradient="radial-gradient(100.5% 94.44% at 1.7% 66.67%, #FCAA24 0%, #FFDA98 49.04%, #FCAA24 100%)"
          />

          <Link
            to="https://jinada.gg/"
            target="_blank"
            className="w-full max-w-[857px]"
          >
            <button
              className="w-full h-[48px] lg:h-[56px] rounded-[5px] border border-[#FFBE4A] flex items-center justify-between px-4 lg:px-6 transition-all hover:bg-[#FFBE4A] hover:bg-opacity-10"
              style={{
                background:
                  "linear-gradient(90deg, #B6710A 0.01%, #D39A31 99.5%)",
              }}
            >
              <span className="font-titillium text-[14px] lg:text-[18px] uppercase text-white font-normal">
                VISIT WEBSITE
              </span>
              <div className="rotate-30">
                <WhiteArrow />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#3a3a3a]"></div>
    </>
  );
}
