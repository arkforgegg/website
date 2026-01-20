import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/ecosystem/kyo-cards-logo.png";

import globalMarketDataIcon from "../assets/icons/global-market.png";
import aiScannerIcon from "../assets/icons/ai-scanner.png";
import auctionIcon from "../assets/icons/auction.png";
import verifiedIcon from "../assets/icons/verified.png";
import bargainIcon from "../assets/icons/bargain.png";
import openOfferIcon from "../assets/icons/open-offer.png";

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
      icon: globalMarketDataIcon,
      name: "Global Market data",
    },
    {
      icon: aiScannerIcon,
      name: "AI Scanner",
    },
    {
      icon: auctionIcon,
      name: "Auction",
    },
    {
      icon: verifiedIcon,
      name: "OPTIONAL\nAUTHENTICATION",
    },
    {
      icon: bargainIcon,
      name: "Bargain",
    },
    {
      icon: openOfferIcon,
      name: "Open Offer",
    },
  ];

  const pressMediaItems = [
    {
      img: pressMediaImage1,
      title:
        "SG-based Kyo Cards debuts SEA's AI-powered trading card platform - TECH IN ASIA",
      description:
        "Kyo Cards, a Singapore-based trading card marketplace, has officially launched its AI-powered platform aimed at collectors, players, and sellers in Southeast Asia. The company integrates AI to help users identify card details, manage inventories, and access pricing based on global market data. Kyo Cards offers secure transactions and features tools like open offers and private negotiation options.",
      tags: [],
      link: "https://techinasia.com/sg-based-kyo-cards-debuts-seas-ai-powered-trading-card-platform",
    },

    {
      img: pressMediaImage2,
      title:
        "Kyo Cards Launches SEA's AI-Powered Trading Card Platform - Asia Business Outlook",
      description:
        "Kyo Cards, a trading card marketplace based in Singapore, has launched an AI-powered platform to support collectors, players, and sellers throughout Southeast Asia. The company integrates AI technology to aid users in identifying card attributes, maintaining inventories, and gaining insights into prices derived from global market data.",
      tags: [],
      link: "https://www.asiabusinessoutlook.com/news/kyo-cards-launches-sea-s-aipowered-trading-card-platform-nwid-10097.html",
    },
  ];

  const offlineEventsItems = [
    {
      img: offlineEventsImage1,
      title: "Kyo Cards at Singapore Card Show",
      description:
        "Kyo Cards participates in major card shows such as the SG Card Show to build physical brand presence and engage the wider TCG community. At these events, we showcase selected sellers from our marketplace, allow attendees to experience features like bargaining in real time, and conduct buybacks and community giveaways — using on-ground activations to educate, reward, and connect with collectors.",
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
        className="relative  flex flex-col items-center text-white px-5 lg:px-20 py-20 max-w-sm md:max-w-2xl lg:max-w-5xl"
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
              lineHeight: "1.349",
            }}
          >
            2025 - Present
          </p>

          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-4 lg:mb-6 leading-normal">
            Kyo Cards is a game-changing, AI-powered online marketplace built
            for the global TCG community. Designed to support both players and
            collectors, the platform combines global market data, live auctions
            with anti-sniping and second chance offers, and intelligent trading
            tools to create a more trusted, transparent, and efficient trading
            environment.
          </p>
          <p className="font-titillium text-[14px] lg:text-[18px] text-justify max-w-[856px] mb-8 lg:mb-12 leading-normal">
            Beyond the marketplace, Kyo Cards actively engages the community
            through offline events and digital event experiences — bridging
            online infrastructure with real-world interactions to strengthen
            discovery, participation, and connection across the hobby.
          </p>

          <div className="flex gap-1 lg:-gap-12 mb-8 lg:mb-12 justify-between overflow-x-auto w-full">
            <button
              onClick={() => setActiveTab("key-capabilities")}
              className={`montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors whitespace-nowrap ${activeTab === "key-capabilities"
                ? "border-[#6684f7] text-white"
                : "border-transparent text-[#6c6c6c]"
                }`}
            >
              Key Capabilities
            </button>
            <button
              onClick={() => setActiveTab("press-media")}
              className={`montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors whitespace-nowrap ${activeTab === "press-media"
                ? "border-[#6684f7] text-white"
                : "border-transparent text-[#6c6c6c]"
                }`}
            >
              Press & Media
            </button>
            <button
              onClick={() => setActiveTab("offline-events")}
              className={`montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors whitespace-nowrap ${activeTab === "offline-events"
                ? "border-[#6684f7] text-white"
                : "border-transparent text-[#6c6c6c]"
                }`}
            >
              Offline Events
            </button>
            <button
              onClick={() => setActiveTab("event-microsite")}
              className={`montserrat-bold font-bold text-[12px] lg:text-[18px] uppercase px-2 lg:px-3 border-l-[4px] lg:border-l-[6px] transition-colors whitespace-nowrap ${activeTab === "event-microsite"
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
                from: "rgba(57, 82, 255, 0.9)",
                to: "rgba(51, 161, 255, 0.9)",
              }}
            />
          )}

          {activeTab === "press-media" && (
            <ContentSwiper
              items={pressMediaItems}
              arrowGradient={{
                from: "rgba(57, 82, 255, 0.9)",
                to: "rgba(51, 161, 255, 0.9)",
              }}
            />
          )}

          {activeTab === "offline-events" && (
            <ContentSwiper
              items={offlineEventsItems}
              arrowGradient={{
                from: "rgba(57, 82, 255, 0.9)",
                to: "rgba(51, 161, 255, 0.9)",
              }}
            />
          )}

          {activeTab === "event-microsite" && (
            <ContentSwiper
              items={eventMicrositeItems}
              arrowGradient={{
                from: "rgba(57, 82, 255, 0.9)",
                to: "rgba(51, 161, 255, 0.9)",
              }}
            />
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
                  "linear-gradient(90deg, #3F4BFF 0.01%, #97CBEE 99.5%)",
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
