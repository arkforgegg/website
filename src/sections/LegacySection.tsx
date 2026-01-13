import ecosystemImg from "../assets/img/ecosystem.png";
import { Fireflies } from "../components";

export function LegacySection() {
  return (
    <div className="w-full bg-black py-12 px-4 relative overflow-hidden">
      <div className="hidden lg:block">
        <Fireflies position="left" top="20%" size="small" />
        <Fireflies position="right" top="60%" size="small" />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div
          className="text-center w-full"
          style={{
            background:
              "radial-gradient(669.73% 70.97% at 50% 49.64%, #F00 0%, #F15E02 33.14%, #E20000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 0px 26.551px #ff0606",
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

        <div className="relative w-full max-w-4xl">
          <img
            alt="Gaming Ecosystem"
            className="w-full h-auto"
            src={ecosystemImg}
          />
        </div>

        <div className="flex flex-row gap-4 md:gap-16 items-center justify-between uppercase tracking-wider">
          <div
            className="uppercase bg-clip-text text-transparent tracking-normal"
            style={{
              background:
                "linear-gradient(90deg, #FF0606 0%, #FF0606 50%, #F15E02 100%)",
              textShadow: "0px 0px 35.696px #ff0606",
              WebkitBackgroundClip: "text",
            }}
          >
            <p className="mb-0 font-bold montserrat-bold leading-[1.2] text-xs md:text-4xl">
              GLOBAL PRESENCE
            </p>
            <p className="font-bold font-titillium text-[8px] md:text-2xl">
              ACROSS 5 CONTINENTS
            </p>
          </div>

          <div
            className="uppercase bg-clip-text text-transparent tracking-normal flex-1"
            style={{
              background:
                "linear-gradient(90deg, #FF0606 0%, #FF0606 50%, #F15E02 100%)",
              textShadow: "0px 0px 35.696px #ff0606",
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
                "linear-gradient(90deg, #FF0606 0%, #FF0606 50%, #F15E02 100%)",
              textShadow: "0px 0px 35.696px #ff0606",
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
    </div>
  );
}
