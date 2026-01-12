import { useState } from "react";
import { DownArrow } from "../components/Icons";
import { Fireflies, Navbar } from "../components";
import heroVideo from "../assets/videos/hero-video.webm";

export function HeroSection() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="bg-black relative w-full flex flex-col items-center">
      <Navbar />
      <Fireflies position="left" top="35%" />

      <div
        className={`h-[185px] md:h-[300px] lg:h-[360px] xl:h-[427px] w-full max-w-[337.506px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[779px] ${
          videoEnded ? "" : "mix-blend-hard-light"
        } mb-[36.446px] md:mb-[42px] lg:mb-[45px] xl:mb-[39px] relative`}
      >
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setVideoEnded(true)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="pointer-events-none shadow-[inset_0px_1.733px_82.448px_0px_black] md:shadow-[inset_0px_2.5px_120px_0px_black] lg:shadow-[inset_0px_3px_150px_0px_black] xl:shadow-[inset_0px_4px_190.3px_0px_black] absolute inset-0" />
      </div>
      <div className="flex flex-col gap-[36.446px] md:gap-[42px] lg:gap-[45px] xl:gap-[49px] items-center max-w-[1573px] px-4 md:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-[20.826px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] items-center text-center w-full max-w-[352px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-none">
          <div className="font-montserrat font-medium leading-[1.349] text-white tracking-[0.7438px] md:tracking-[0.85px] lg:tracking-[0.95px] xl:tracking-[1px] uppercase w-full">
            <p
              className="font-bold mb-0 text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] tracking-[0.96px] md:tracking-[1.44px] lg:tracking-[1.68px] xl:tracking-[1.92px] bg-clip-text"
              style={{
                background:
                  "radial-gradient(669.73% 70.97% at 50% 49.64%, #F00 0%, #F15E02 33.14%, #E20000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 0px 26.551px #ff0606",
              }}
            >
              <span className="md:hidden">
                Forging the Future of the ACG Ecosystem
              </span>
              <span className="hidden md:inline">
                Enhancing Value Across the Gaming Ecosystem
              </span>
            </p>
            <p
              className="text-[16px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-white"
              style={{ textShadow: "0px 0px 26.551px #ff0606" }}
            >
              Platforms, services, and ventures advancing the ACG industry.
            </p>
          </div>
          <div className="font-montserrat font-normal leading-normal text-[#ebebeb] text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[0.28px] md:tracking-[0.32px] lg:tracking-[0.34px] xl:tracking-[0.36px] max-w-[352px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1183px] whitespace-pre-wrap text-center">
            <p className="font-titillium mb-0 not-italic">
              ArkForge is an ACG(A<span className="lowercase">nime, </span>C
              <span className="lowercase">ollectibles and </span>G
              <span className="lowercase">ames</span>)-focused ecosystem builder
              and venture group. We operate across agency services, digital
              platforms, and emerging consumer products — connecting
              communities, creators, and brands across anime, comics, and
              gaming.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="font-titillium not-italic">
              Our mission is to contribute to, innovate within, and elevate the
              ACG industry by building interconnected businesses that create
              long-term value for the ecosystem.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[15.62px] md:gap-[18px] lg:gap-[20px] xl:gap-[21px] items-center">
          <a
            href="#contact"
            className="bg-gradient-to-b from-[#ff0606] to-[#900000] border-[#f21616] border-[0.541px] md:border-[0.65px] lg:border-[0.7px] xl:border-[0.727px] border-solid flex items-center justify-center h-[35.702px] md:h-[42px] lg:h-[45px] xl:h-[48px] px-[17.851px] md:px-[20px] lg:px-[22px] xl:px-[24px] py-[7.438px] md:py-[9px] lg:py-[9.5px] xl:py-[10px] rounded-[2.704px] md:rounded-[3.2px] lg:rounded-[3.4px] xl:rounded-[3.636px] shadow-[0px_0px_26.551px_-2.886px_#ff0606] md:shadow-[0px_0px_30px_-3.2px_#ff0606] lg:shadow-[0px_0px_33px_-3.5px_#ff0606] xl:shadow-[0px_0px_35.696px_-3.88px_#ff0606] hover:opacity-90 transition-opacity no-underline"
          >
            <p className="font-montserrat font-medium leading-none text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white">
              Contact Us
            </p>
          </a>
          <a
            href="#nova"
            className="border-[#f21616] border-[0.744px] md:border-[0.85px] lg:border-[0.9px] xl:border-[1px] border-solid flex items-center justify-center gap-[7.438px] md:gap-[8.5px] lg:gap-[9px] xl:gap-[10px] h-[35.702px] md:h-[42px] lg:h-[45px] xl:h-[48px] px-[17.851px] md:px-[20px] lg:px-[22px] xl:px-[24px] py-[7.438px] md:py-[9px] lg:py-[9.5px] xl:py-[10px] rounded-[2.704px] md:rounded-[3.2px] lg:rounded-[3.4px] xl:rounded-[3.636px] shadow-[0px_0px_6.174px_-2.886px_red] md:shadow-[0px_0px_7px_-3px_red] lg:shadow-[0px_0px_7.5px_-3.2px_red] xl:shadow-[0px_0px_8.3px_-3.88px_red] hover:opacity-90 transition-opacity no-underline"
          >
            <p className="font-montserrat font-medium leading-none text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white">
              Discover Now
            </p>
            <div className="flex items-center justify-center">
              <DownArrow />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
