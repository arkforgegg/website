import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/ecosystem/kyo-cards-logo.png";

import aiScannerIcon from "../assets/icons/ai-scanner.svg";
import auctionIcon from "../assets/icons/auction.svg";
import verifiedIcon from "../assets/icons/verified.svg";
import bargainIcon from "../assets/icons/bargain.svg";
import openOfferIcon from "../assets/icons/open-offer.svg";

import { WhiteArrow } from "../components/Icons";
import { ContentSwiper } from "../components/ContentCard";
import { ServicesSwiper } from "../components/ServiceCard";

import pressMediaImage1 from "../assets/img/kyo-cards/press-media-1.png";
import pressMediaImage2 from "../assets/img/kyo-cards/press-media-2.png";

import offlineEventsImage1 from "../assets/img/kyo-cards/offline-event-1.png";
import offlineEventsImage2 from "../assets/img/kyo-cards/offline-event-2.png";

import eventMicrositeImage1 from "../assets/img/kyo-cards/event-microsite-1.png";

export function KyoCards() {
  const [activeTab, setActiveTab] = useState<
    "key-capabilities" | "press-media" | "offline-events" | "event-microsite"
  >("key-capabilities");

  const keyCapabilities = [
    {
      icon: {
        src: aiScannerIcon,
        width: 153,
        height: 152,
      },
      name: "AI Scanner",
    },
    {
      icon: {
        src: auctionIcon,
        width: 156,
        height: 161,
      },
      name: "Auction",
    },
    {
      icon: {
        src: verifiedIcon,
        width: 143,
        height: 143,
      },
      name: "OPTIONAL\nAUTHENTICATION",
    },
    {
      icon: {
        src: bargainIcon,
        width: 128,
        height: 112,
      },
      name: "Bargain",
    },
    {
      icon: {
        src: openOfferIcon,
        width: 128,
        height: 112,
      },
      name: "Open Offer",
    },
  ];

  const pressMediaItems = [
    {
      img: pressMediaImage1,
      title:
        "SG-based Kyo Cards debuts SEA's AI-powered trading card platform - tech in asia",
      description:
        "Kyo Cards, a Singapore-based trading card marketplace, has officially launched its AI-powered platform aimed at collectors, players, and sellers in Southeast Asia.\n The company integrates AI to help users identify card details, manage inventories, and access pricing based on global market data. Kyo Cards offers an escrow payment system for secure transactions and features tools like open offers and private negotiation options.",
      tags: [],
    },

    {
      img: pressMediaImage2,
      title:
        "Kyo Cards Launches SEA's AI-Powered Trading Card Platform - Asia Business Outlook",
      description:
        "Kyo Cards, a trading card marketplace based in Singapore, has launched an AI-powered platform to support collectors, players, and sellers throughout Southeast Asia.\nThe company integrates AI technology to aid users in identifying card attributes, maintaining inventories, and gaining insights into prices derived from global market data.",
      tags: [],
    },
  ];

  const offlineEventsItems = [
    {
      img: offlineEventsImage1,
      title: "Kyo Cards at Singapore Card Show",
      description:
        "Kyo Cards participates in major card shows such as the SG Card Show to build physical brand presence and engage the wider TCG community.\nAt these events, we showcase selected sellers from our marketplace, allow attendees to experience features like bargaining in real time, and conduct buybacks and community giveaways — using on-ground activations to educate, reward, and connect with collectors.",
      tags: [],
    },
    {
      img: offlineEventsImage2,
      title: "Kyo Cards Tradeshow",
      description:
        "Kyo Cards Tradeshow is a community-driven trading card event designed to bring collectors, vendors, and players together.\nThe event is fully supported by a digital event microsite — featuring an interactive floor map, vendor locations, digital lucky draw entries, and live winner announcements — blending physical trading with digital tools to create a more connected, transparent, and engaging TCG experience.",
      tags: [],
    },
  ];

  const eventMicrositeItems = [
    {
      img: eventMicrositeImage1,
      title: "Event Microsite",
      description:
        "Kyo Cards powers fully digital event microsites that serve as interactive guides for attendees. From vendor maps and live listings to digital lucky draws, our event tools enhance discovery, engagement, and the overall on-ground experience.",
      tags: [],
    },
  ];

  return (
    <>
      <div
        id="kyocards"
        className="relative min-h-screen flex flex-col items-center text-white px-5 lg:px-20 py-10 lg:py-20 max-w-sm md:max-w-2xl lg:max-w-5xl"
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="max-w-[1400px] w-full flex flex-col">
          <img
            src={logo}
            alt="Kyo Cards"
            className="w-[155px] lg:w-[315px] h-auto mb-6 lg:mb-8 mx-auto"
          />

          <p
            className="montserrat-bold text-[16px] lg:text-[20px] font-bold uppercase text-center mb-6 lg:mb-8 tracking-[0.8px] bg-clip-text"
            style={{
              background:
                "radial-gradient(1414.09% 100.56% at 1.7% 66.67%, #96B7EF 0%, #6CE5DE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 35.696px rgba(53, 139, 255, 0.7)",
              lineHeight: "1.349",
            }}
          >
            2025 - Present
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-8 lg:mb-12 leading-normal">
            Kyo Cards is a game-changing, AI-powered online marketplace built
            for the global TCG community. Designed to support both players and
            collectors, the platform combines global market data, secure escrow
            payments, and intelligent trading tools to create a safer, more
            transparent trading environment.
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-8 lg:mb-12 leading-normal">
            Beyond the marketplace, Kyo Cards actively engages the community
            through offline events and digital event experiences — bridging
            online infrastructure with real-world interactions to strengthen
            trust, discovery, and participation across the hobby.
          </p>

          <div className="flex gap-8 lg:gap-2 mb-8 lg:mb-12 justify-between flex-wrap">
            <button
              onClick={() => setActiveTab("key-capabilities")}
              className={`montserrat-bold font-bold text-[14px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "key-capabilities"
                  ? "border-[#6684f7] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Key Capabilities
            </button>
            <button
              onClick={() => setActiveTab("press-media")}
              className={`montserrat-bold font-bold text-[14px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "press-media"
                  ? "border-[#6684f7] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Press & Media
            </button>
            <button
              onClick={() => setActiveTab("offline-events")}
              className={`montserrat-bold font-bold text-[14px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "offline-events"
                  ? "border-[#6684f7] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Offline Events
            </button>
            <button
              onClick={() => setActiveTab("event-microsite")}
              className={`montserrat-bold font-bold text-[14px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors ${
                activeTab === "event-microsite"
                  ? "border-[#6684f7] text-white"
                  : "border-transparent text-[#6c6c6c]"
              }`}
            >
              Event Microsite
            </button>
          </div>

          {activeTab === "key-capabilities" && (
            <ServicesSwiper
              items={keyCapabilities}
              arrowGradient={{
                from: "rgba(57, 82, 255, 0.6)",
                to: "rgba(51, 161, 255, 0.6)",
              }}
              textShadowColor="0px 0px 35.696px rgba(63, 75, 254, 0.7)"
            />
          )}

          {activeTab === "press-media" && (
            <ContentSwiper items={pressMediaItems} />
          )}

          {activeTab === "offline-events" && (
            <ContentSwiper items={offlineEventsItems} />
          )}

          {activeTab === "event-microsite" && (
            <ContentSwiper items={eventMicrositeItems} />
          )}

          <Link
            to="https://kyocards.com/"
            target="_blank"
            className="w-full max-w-[857px]"
          >
            <button
              className="w-full h-[48px] lg:h-[56px] rounded-[5px] border border-[#3952FF] flex items-center justify-between px-4 lg:px-6 transition-all hover:bg-[#3952FF] hover:bg-opacity-10"
              style={{
                background:
                  "linear-gradient(90deg, #3952FF 0.01%, #33A1FF 99.5%)",
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
