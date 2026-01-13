import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { DownArrow } from "../components/Icons";
import "swiper/css";
import "swiper/css/pagination";
import imgPulseNovaLogo from "../assets/img/ecosystem/pulse-nova-logo.png";
import imgKyoCardsLogo from "../assets/img/ecosystem/kyo-cards-logo.png";
import imgJinadaLogo from "../assets/img/ecosystem/jinada-logo.png";
import imgRsgLogo from "../assets/img/ecosystem/rsg-logo.png";

interface EcosystemCard {
  logo: string;
  title: string;
  description: string;
  hasLearnMore?: boolean;
  learnMoreLink?: string;
}

const ecosystemCards: EcosystemCard[] = [
  {
    logo: imgPulseNovaLogo,
    title: "Where Brands Meet ACG Communities",
    description:
      "Pulse Nova Entertainment connects brands to ACG communities through creators, esports, and culture-first digital activations.",
    learnMoreLink: "#nova",
  },
  {
    logo: imgKyoCardsLogo,
    title: "Game-Changing Card Marketplace",
    description:
      "Kyo Cards is an AI-powered marketplace designed for the modern TCG community. With global market insights, secure escrow payments, and smart trading tools, it delivers a more trusted, transparent, and efficient way for collectors and players to trade.",
    learnMoreLink: "#kyocards",
  },
  {
    logo: imgJinadaLogo,
    title: "Level Up Your Life. Play Smarter",
    description:
      "Jinada is a rewards card in incubation, built to transform everyday spending into value and access across the ACG ecosystem.",
    learnMoreLink: "#jinada",
  },
  {
    logo: imgRsgLogo,
    title: "Pursuit of Excellence — an Esports Legacy",
    description:
      "RSG represents ArkForge's competitive esports roots. Its legacy of performance and community shaped our perspective on gaming culture and inspired our broader journey into building the ACG ecosystem.",
    learnMoreLink: "#rsg",
  },
];

export function EcosystemSection() {
  return (
    <div className="px-0 md:px-10 xl:px-20 mt-28 pb-11 xl:pb-64 w-full">
      <div className="flex flex-col items-center gap-10 md:gap-20">
        <h2
          className="font-montserrat font-bold text-2xl md:text-[32px] leading-[1.349] text-center uppercase tracking-[1.28px] bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
            textShadow: "0px 0px 35.696px #ff0606",
            WebkitBackgroundClip: "text",
          }}
        >
          OUR ECOSYSTEM
        </h2>

        <div className="max-w-[1596px] mx-auto w-full">
          <div className="hidden md:flex gap-6 justify-center items-center flex-wrap lg:flex-nowrap">
            {ecosystemCards.map((card, index) => (
              <div
                key={index}
                className="group border border-[#393939] rounded-2xl h-[472px] w-full max-w-[375px] overflow-hidden relative bg-gradient-to-br from-[#2a2a2a] to-black flex flex-col shrink-0 transition-all duration-300 hover:border-[#ff7e7e] hover:shadow-[0_0_35.5px_3px_rgba(255,0,0,0.8)]"
              >
                <div className="bg-black h-[220px] w-full flex items-center justify-center p-5 rounded-t-2xl">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="max-w-[200px] max-h-[120px] object-contain"
                  />
                </div>
                <div className="p-[14px] flex flex-col gap-[14px] flex-1">
                  <h3 className="font-montserrat font-semibold text-xl leading-normal tracking-[0.5px] uppercase text-white m-0">
                    {card.title}
                  </h3>
                  <p className="font-titillium font-normal text-[15px] leading-normal text-white text-justify capitalize m-0 flex-1">
                    {card.description}
                  </p>
                  <a
                    href={card.learnMoreLink}
                    className="flex items-center gap-[5px] font-montserrat font-bold text-sm leading-[1.349] tracking-[0.56px] uppercase no-underline mt-auto self-end bg-gradient-to-b from-[#ff0606] to-[#ff7e7e] bg-clip-text text-transparent opacity-0 transition-all duration-300 group-hover:opacity-100 hover:drop-shadow-[0_0_35.696px_#ff0606]"
                  >
                    <DownArrow className="text-[#ff0606]" />
                    <span>LEARN MORE</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:hidden  pt-4 px-2">
            <Swiper
              effect={"coverflow"}
              modules={[EffectCoverflow, Pagination]}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.5}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              className="ecosystem-swiper"
            >
              {ecosystemCards.map((card, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      className={`border border-[#393939] rounded-2xl h-[295px] w-full max-w-[375px] mx-auto  relative bg-gradient-to-br from-[#2a2a2a] to-black flex flex-col shrink-0 transition-all duration-500 ${
                        isActive
                          ? "shadow-[0_0_35.5px_3px_rgba(255,0,0,0.8)]"
                          : ""
                      }`}
                    >
                      <div className="bg-black h-[120px] w-full flex items-center justify-center p-5 rounded-t-2xl">
                        <img
                          src={card.logo}
                          alt={card.title}
                          className="max-w-[120px] max-h-[80px] object-contain"
                        />
                      </div>
                      <div className="p-[14px] flex flex-col gap-[14px] flex-1">
                        <h3 className="font-montserrat font-semibold text-[12.5px] leading-normal tracking-[0.5px] uppercase text-white m-0">
                          {card.title}
                        </h3>
                        <p className="font-titillium font-normal text-[10px] leading-normal text-white text-justify capitalize m-0 flex-1">
                          {card.description}
                        </p>
                        {card.learnMoreLink && (
                          <a
                            href={card.learnMoreLink}
                            className="flex items-center gap-[5px] font-montserrat font-bold text-[9px] leading-[1.349] tracking-[0.56px] uppercase no-underline mt-auto self-end bg-gradient-to-b from-[#ff0606] to-[#ff7e7e] bg-clip-text text-transparent drop-shadow-[0_0_35.696px_#ff0606]"
                          >
                            <DownArrow className="text-[#ff0606] w-[12px] h-[12px]" />
                            <span>LEARN MORE</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
