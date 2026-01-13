import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/ecosystem/pulse-nova-logo.png";
import caseStudy1 from "../assets/img/pulse-nova/case-study-1.png";
import caseStudy2 from "../assets/img/pulse-nova/case-study-2.png";
import caseStudy3 from "../assets/img/pulse-nova/case-study-3.png";
import caseStudy4 from "../assets/img/pulse-nova/case-study-4.png";
import caseStudy5 from "../assets/img/pulse-nova/case-study-5.png";

import handshakeIcon from "../assets/icons/handshake.svg";
import calendarIcon from "../assets/icons/calendar-game.svg";
import communityIcon from "../assets/icons/community.svg";
import talentIcon from "../assets/icons/talent.svg";
import prIcon from "../assets/icons/pr.svg";
import videoIcon from "../assets/icons/video.svg";

import { WhiteArrow } from "../components/Icons";
import { ContentSwiper } from "../components/ContentCard";
import { ServicesSwiper } from "../components/ServiceCard";

export function PulseNova() {
  const [activeTab, setActiveTab] = useState<"services" | "case-studies">(
    "services"
  );

  const caseStudies = [
    {
      title: "MPL SG",
      desc: "National Tournament - MPL SG S9&S10 - Moonton (2025). The country’s only professional tournament of MLBB held officially. Service Provided:",
      img: caseStudy1,
      tags: [
        "Tournament Design",
        "Strategy Planning",
        "Marketing",
        "Brand Collaboration",
        "E-sports Team Management",
        "Event Management",
        "Event Execution",
      ],
    },
    {
      title: "Project Sekai - Bytedance (2024)",
      desc: "Celebrate Project Sekai’s 2 Year Anniversary at anime cafe in Seoul and Busan. Service Provided:",
      img: caseStudy2,
      tags: [
        "Venue Booking",
        "Venue Design and Branding",
        "KOL Marketing",
        "Onsite Management",
        "Merchandise",
      ],
    },
    {
      title: "Terminull Brigade SEA Launch",
      desc: "Support official launch of Tencent new games in South East Asia. Service Provided:",
      img: caseStudy3,
      tags: [
        "Offline Activation",
        "PC Bar Collaboration",
        "Campus Club Collaboration",
        "Community Tournament",
        "Digital and Social Media",
      ],
    },
    {
      title: "Omniheros Global launch",
      desc: "Ominiheros is a mobile game published by Omni Games; It's global launch engages various KOLs among multiple regions. Service Provided:",
      img: caseStudy4,
      tags: [
        "KOL Sourcing",
        "Contracting",
        "Content Strategy",
        "Communication Messaging Planning",
        "Execution",
      ],
    },
    {
      title: "Project Sekai AGF 2023",
      desc: "Celebrate Project Sekai's 1.5 Year Anniversary at the Anime x Games Festival 2023 happening in Ilsan. Service Provided:",
      img: caseStudy5,
      tags: [
        "Venue Booking",
        "Booth Design",
        "KOL Marketing",
        "Onsite Management",
        "Merchandise",
      ],
    },
  ];

  const services = [
    {
      icon: {
        src: handshakeIcon,
        width: 129,
        height: 129,
      },
      name: "SPONSORSHIP",
    },
    {
      icon: {
        src: calendarIcon,
        width: 196,
        height: 129,
      },
      name: "GAMING EVENT\nMANAGEMENT",
    },
    {
      icon: {
        src: communityIcon,
        width: 128,
        height: 128,
      },
      name: "COMMUNITY\nMANAGEMENT",
    },
    {
      icon: {
        src: talentIcon,
        width: 197,
        height: 197,
      },
      name: "TALENT BOOKING",
    },
    {
      icon: {
        src: prIcon,
        width: 185,
        height: 128,
      },
      name: "PUBLIC RELATIONS",
    },
    {
      icon: {
        src: videoIcon,
        width: 130,
        height: 128,
      },
      name: "VIDEO PRODUCTION",
    },
  ];

  return (
    <>
      <div
        id="nova"
        className="relative min-h-screen flex flex-col items-center text-white px-5 lg:px-20 py-10 lg:py-20 max-w-sm md:max-w-2xl lg:max-w-5xl"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="max-w-[1400px] w-full flex flex-col">
          <img
            src={logo}
            alt="Pulse Nova"
            className="w-[155px] lg:w-[234px] h-auto mb-6 lg:mb-8 mx-auto"
          />

          <p
            className="montserrat-bold text-[16px] lg:text-[20px] font-bold uppercase text-center mb-6 lg:mb-8 tracking-[0.8px] bg-clip-text"
            style={{
              background:
                "radial-gradient(1414.09% 100.56% at 1.7% 66.67%, #96B7EF 0%, #6CE5DE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 22.5px rgba(24, 255, 199, 0.7)",
              lineHeight: "1.349",
            }}
          >
            2022 - Present
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-8 lg:mb-12 leading-normal">
            Pulse Nova is a global leader in comprehensive gaming marketing,
            leveraging partnerships with major platforms such as YouTube,
            Twitch, Facebook, and TikTok. As an Asian Partner, its influence
            extends across North America, Europe, Asia, South America, and Latin
            America. Boasting an impressive 805 million-strong fan base, Pulse
            Nova stands as a testament to unparalleled success in the esports
            and gaming industry. Pulse Nova's widespread network and strategic
            collaborations solidify their position as a powerhouse in connecting
            brands with gaming audiences on a global scale.
          </p>

          <div className="flex gap-8 lg:gap-14 mb-8 lg:mb-12">
            <button
              onClick={() => setActiveTab("services")}
              className={`montserrat-bold font-bold text-[14px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "services"
                  ? "border-[#6ED7DB] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`montserrat-bold font-bold text-[14px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "case-studies"
                  ? "border-[#6ED7DB] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Case Studies
            </button>
          </div>

          {activeTab === "services" && <ServicesSwiper items={services} />}

          {activeTab === "case-studies" && (
            <ContentSwiper
              items={caseStudies.map((study) => ({
                img: study.img,
                title: study.title,
                description: study.desc,
                tags: study.tags,
              }))}
            />
          )}

          <Link
            to="https://pulsenova.gg/"
            target="_blank"
            className="w-full max-w-[857px]"
          >
            <button
              className="w-full h-[48px] lg:h-[56px] rounded-[5px] border border-[#4FAA94] flex items-center justify-between px-4 lg:px-6 transition-all hover:bg-[#4FAA94] hover:bg-opacity-10"
              style={{
                background:
                  "linear-gradient(90deg, #0A604B 0.01%, #4FAA94 99.5%)",
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
