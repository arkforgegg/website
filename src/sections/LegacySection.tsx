import ecosystemImg from "../assets/img/ecosystem.png";
import ecosystemImgMobile from "../assets/img/ecosystem-mobile.png";

export function LegacySection() {
  return (
    <section
      id="about-us"
      className="w-full bg-black py-12 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div
          className="text-center "
          style={{
            background:
              "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <p
            className="mb-0 uppercase leading-none montserrat-bold text-lg sm:text-2xl md:text-[32px]"
            style={{
              letterSpacing: "1.28px",
            }}
          >
            BUILDING A LEGACY SINCE <br />
            <span
              className="uppercase montserrat-black"
              style={{
                fontSize: "clamp(40px, 10vw, 80px)",
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "100%",
                letterSpacing: "3.2px",
              }}
            >
              2015
            </span>
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-2 items-center">
          <div className="w-full lg:w-[455px] flex flex-col gap-4">
            <h3
              className="text-[#EBEBEB] font-titillium text-lg leading-normal tracking-[1.08px] hidden lg:block"
              style={{
                WebkitTextStrokeColor: "#FFFFFF",
                WebkitTextStrokeWidth: "0.5px",
              }}
            >
              ArkForge is a gaming-focused ecosystem builder.
            </h3>
            <p className="text-[#ebebeb] font-titillium font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-normal tracking-[0.28px] md:tracking-[0.32px] lg:tracking-[0.36px]">
              We design, operate, and connect platforms, services, and ventures
              that enhance value across the gaming ecosystem — spanning talent,
              commerce, fintech, esports, and cultural infrastructure.
              <br />
              <br />
              Our work sits at the intersection of technology, community, and
              culture. By bringing together creators, players, partners, and
              brands, we build systems that enable sustainable growth, deeper
              engagement, and meaningful participation across gaming.
              <br />
              <br />
              From talent activation and agency services to trading
              infrastructure, financial innovation, and ecosystem enablement,
              ArkForge exists to strengthen how value is created, distributed,
              and experienced within gaming communities worldwide.
            </p>
          </div>

          <div className="relative flex-1 max-w-4xl">
            <img
              alt="Gaming Ecosystem"
              className="w-full h-auto hidden lg:block"
              src={ecosystemImg}
            />
            <img
              alt="Gaming Ecosystem"
              className="w-full h-auto block lg:hidden"
              src={ecosystemImgMobile}
            />
          </div>
        </div>

        <div className="flex flex-row gap-10 md:gap-16 lg:gap-32 items-center justify-between uppercase tracking-wider">
          <div
            className="uppercase bg-clip-text text-transparent tracking-normal"
            style={{
              background:
                "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            <p className="mb-0 font-bold montserrat-bold leading-[1.2] text-xs md:text-4xl">
              5 CONTINENTS
            </p>
            <p className="font-bold font-titillium text-[8px] md:text-2xl">
              GLOBAL PRESENCE
            </p>
          </div>

          <div
            className="uppercase bg-clip-text text-transparent tracking-normal flex-1"
            style={{
              background:
                "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            <p className="mb-0 font-bold montserrat-bold leading-[1.2] text-xs md:text-4xl">
              500M+
            </p>
            <p className="font-bold font-titillium text-[8px] md:text-2xl">
              COMMUNITY REACH
            </p>
          </div>

          <div
            className="uppercase bg-clip-text text-transparent tracking-normal flex-1/2"
            style={{
              background:
                "linear-gradient(90deg, #F00 0%, #FF9D4C 51.93%, #F00 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            <p className="mb-0 font-bold montserrat-bold leading-[1.2] text-xs md:text-4xl">
              100+
            </p>
            <p className="font-bold font-titillium text-[8px] md:text-2xl">
              GLOBAL BRAND RELATIONSHIPS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
