import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import logo from "../assets/img/ecosystem/rsg-logo.png";
import msc from "../assets/img/rsg/msc.jpg";
import rsg2 from "../assets/img/rsg/rsg2.png";

import sg from "../assets/img/rsg/sg.png";
import my from "../assets/img/rsg/my.png";
import ph from "../assets/img/rsg/ph.png";

import crownIcon from "../assets/icons/crown.svg";
import { WhiteArrow } from "../components/Icons";
import { ContentSwiper } from "../components/ContentCard";

export function RSG() {
  const [activeTab, setActiveTab] = useState<
    "regions-conquered" | "success-stories"
  >("regions-conquered");
  const regionsSwiperRef = useRef<SwiperType | null>(null);
  const [isRegionsBeginning, setIsRegionsBeginning] = useState(true);
  const [isRegionsEnd, setIsRegionsEnd] = useState(false);

  const stories = [
    {
      img: msc,
      title: "RSG PH MSC 2022 Champions",
      description: `In 2022, RSG Philippines achieved a monumental victory in the Mobile Legends MSC Championship, solidifying their position as a top esports team. This win showcases their exceptional skills and teamwork on the global stage, earning them a well-deserved place in esports history.`,
      tags: [],
    },
    {
      img: rsg2,
      title: "RSG SG 3-time back to back to back Champions",
      description:
        "RSG Singapore's three consecutive championships in the Mobile Legends Professional League Singapore (MPL SG) attest to their skill and determination, securing their legacy as one of the league's most successful teams.",
      tags: [],
    },
  ];

  const regions = [
    {
      img: sg,
      name: "RSG SINGAPORE",
      achievements: [
        "MPL SG Season 5 Champions",
        "MPL SG Season 4 Champions",
        "MPL SG Season 3 Champions",
        "MPL MY/SG Season 5 Champions",
      ],
    },
    {
      img: ph,
      name: "RSG PHILIPPINES",
      achievements: [
        "MPL Philippines Season 9 Champions",
        "MLBB Southeast Asia Cup 2022",
      ],
    },
    {
      img: my,
      name: "RSG MALAYSIA",
      achievements: ["MPL Malaysia Season 7 Champions"],
    },
  ];

  return (
    <>
      <div
        id="rsg"
        className="relative min-h-screen flex flex-col items-center text-white px-5 lg:px-20 py-20 max-w-sm md:max-w-2xl lg:max-w-5xl"
      >
        <div className="max-w-[1400px] w-full flex flex-col">
          <img
            src={logo}
            alt="RSG"
            className="w-[200px] lg:w-[250px] h-auto  mx-auto"
          />

          <p
            className="montserrat-bold text-[16px] lg:text-[20px] font-bold uppercase text-center mb-6 lg:mb-8 tracking-[0.8px] bg-clip-text"
            style={{
              background:
                "radial-gradient(1414.09% 100.56% at 1.7% 66.67%, #96B7EF 0%, #6CE5DE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 35.696px rgba(192, 202, 255, 0.7)",
              lineHeight: "1.349",
            }}
          >
            2017 - 2025
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-4 lg:mb-6 leading-normal">
            RSG is one of Southeast Asia's most successful esports
            organisations, with a legacy defined by excellence and impact.
            Across six years of competition, the team participated in over 200
            international tournaments and captured 21 championship titles,
            including multiple MPL and regional MSC victories.
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-8 lg:mb-12 leading-normal">
            With millions of fans and peak viewership surpassing 2.3 million,
            RSG helped shape esports culture in the region — laying the
            foundation for ArkForge's deeper commitment to building and
            supporting the ACG ecosystem.
          </p>

          <div className="flex gap-8 lg:gap-14 mb-8 lg:mb-12">
            <button
              onClick={() => setActiveTab("regions-conquered")}
              className={`whitespace-nowrap montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "regions-conquered"
                  ? "border-[#334bc1] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Regions conquered
            </button>
            <button
              onClick={() => setActiveTab("success-stories")}
              className={`whitespace-nowrap montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "success-stories"
                  ? "border-[#334bc1] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Success stories
            </button>
          </div>

          {activeTab === "regions-conquered" && (
            <div className="relative overflow-hidden px-3 mb-8 lg:mb-12">
              <Swiper
                onSwiper={(swiper) => {
                  regionsSwiperRef.current = swiper;
                  setIsRegionsBeginning(swiper.isBeginning);
                  setIsRegionsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsRegionsBeginning(swiper.isBeginning);
                  setIsRegionsEnd(swiper.isEnd);
                }}
                modules={[Navigation]}
                slidesPerView={2}
                spaceBetween={16}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 26,
                  },
                }}
                speed={600}
                className="regions-swiper"
              >
                {regions.map((region, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="w-full max-w-[267px] h-[203px] lg:h-[329px] rounded-[16px] border border-[#fff2f2] overflow-hidden flex flex-col p-2 lg:p-[14px] mx-auto"
                      style={{
                        background:
                          "linear-gradient(144.31deg, rgba(42, 42, 42, 1) 0.72%, rgba(0, 0, 0, 1) 109.87%)",
                      }}
                    >
                      <div className="flex flex-col gap-[12px] lg:gap-[21px] items-center">
                        <div className="flex flex-col gap-[14px] items-center">
                          <div className="w-[57px] h-[57px] lg:w-[93px] lg:h-[93px] flex items-center justify-center">
                            <img
                              src={region.img}
                              alt={region.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <p
                            className="montserrat-bold font-bold text-[11px] lg:text-[18px] text-center uppercase tracking-[0.72px] text-white"
                            style={{
                              textShadow: "0px 0px 11.9px #002bff",
                            }}
                          >
                            {region.name}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start w-full">
                          {region.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex gap-2 items-center w-full"
                            >
                              <img
                                src={crownIcon}
                                alt=""
                                className="w-3 h-3 lg:w-6 lg:h-6 shrink-0"
                              />
                              <p className="font-titillium text-[8px] lg:text-[14px] text-white capitalize leading-normal">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {!isRegionsBeginning && (
                <button
                  onClick={() => regionsSwiperRef.current?.slidePrev()}
                  className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[41px] h-[46px] rounded-[5px] items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(38, 54, 132, 0.60) 0%, rgba(0, 108, 255, 0.60) 100%)",
                    boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="rotate-180">
                    <WhiteArrow />
                  </div>
                </button>
              )}

              {!isRegionsEnd && (
                <button
                  onClick={() => regionsSwiperRef.current?.slideNext()}
                  className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[41px] h-[46px] rounded-[5px] items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(38, 54, 132, 0.60) 0%, rgba(0, 108, 255, 0.60) 100%)",
                    boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <WhiteArrow />
                </button>
              )}
            </div>
          )}

          {activeTab === "success-stories" && (
            <ContentSwiper
              items={stories}
              arrowGradient={{
                from: "rgba(38, 54, 132, 0.9)",
                to: "rgba(0, 108, 255, 0.9)",
              }}
            />
          )}

          <Link
            to="https://www.rsg.gg/"
            target="_blank"
            className="w-full max-w-[857px]"
          >
            <button
              className="w-full h-[48px] lg:h-[56px] rounded-[5px] border border-[#3952FF] flex items-center justify-between px-4 lg:px-6 transition-all hover:bg-[#3952FF] hover:bg-opacity-10"
              style={{
                background:
                  "linear-gradient(90deg, #263684 0.01%, #3346A3 99.5%)",
              }}
            >
              <span className="airif text-[14px] lg:text-[18px] uppercase text-white font-normal">
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
