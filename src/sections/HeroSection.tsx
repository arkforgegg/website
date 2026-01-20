import { DownArrow } from "../components/Icons";
import { Navbar } from "../components";
import heroBg from "../assets/img/hero-bg.png";

export function HeroSection() {
  return (
    <section className="bg-black h-screen relative w-full flex flex-col items-center pb-4 lg:pb-[72px]">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <div
          className={` w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mb-[36.446px] md:mb-[42px] lg:mb-[45px] xl:mb-[77px] relative mx-auto`}
        >
          <img
            src={heroBg}
            alt="ARKFORGE"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-[36.446px] md:gap-[42px] lg:gap-[45px] xl:gap-[49px] items-center max-w-[1573px] px-4 md:px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-[20.826px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] items-center text-center w-full max-w-[352px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-none">
            <p
              className="font-bold mb-0 text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] tracking-[0.96px] md:tracking-[1.44px] lg:tracking-[1.68px] xl:tracking-[1.92px] bg-clip-text uppercase"
              style={{
                background:
                  "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Where ACG Worlds Are Forged
            </p>
            <p className="font-titillium font-normal leading-normal text-[#ebebeb] text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] tracking-[0.28px] md:tracking-[0.32px] lg:tracking-[0.34px] xl:tracking-[0.36px] max-w-[352px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1183px] whitespace-pre-wrap text-center">
              ArkForge builds interconnected ACG ecosystems that unite
              communities, creators, and brands across Anime, Collectibles, and
              Gaming.
            </p>
          </div>
          <div className="flex flex-row gap-[15.62px] md:gap-[18px] lg:gap-[20px] xl:gap-[21px] items-center mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[32px]">
            <a
              href="#contact"
              className="bg-gradient-to-b from-[#ff0606] to-[#900000] border-[#f21616] border-[0.541px] md:border-[0.65px] lg:border-[0.7px] xl:border-[0.727px] border-solid flex items-center justify-center h-[35.702px] md:h-[42px] lg:h-[45px] xl:h-[48px] px-[17.851px] md:px-[20px] lg:px-[22px] xl:px-[24px] py-[7.438px] md:py-[9px] lg:py-[9.5px] xl:py-[10px] rounded-[2.704px] md:rounded-[3.2px] lg:rounded-[3.4px] xl:rounded-[3.636px] hover:opacity-90 transition-opacity no-underline"
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
      </div>
    </section>
  );
}
