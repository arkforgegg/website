import { useEffect, useState } from "react";
import { WhiteArrow } from "../Icons";
import { Link } from "react-router-dom";

interface Stories {
  img: string;
  title: string;
  desc: string;
}

interface Services {
  img: string;
  service: JSX.Element;
}

interface Props {
  id: "nova" | "aghs" | "rsg";
  companyName: string;
  logo: string;
  companyDesc: string;
  companyOffer: string;
  offerList: Services[];
  stories: Stories[];
  storyName: string;
  linkWebsite?: string;
  reverseFlex?: boolean;
  noLineBreak?: boolean;
}

export function GridComponent({
  id,
  logo,
  companyName,
  companyDesc,
  companyOffer,
  offerList,
  stories,
  linkWebsite,
  reverseFlex,
  storyName,
  noLineBreak,
}: Props) {
  const [imgCrsl, setImgCrsl] = useState(0);

  const text = {
    primary: "text-base md:text-xl xl:text-2xl 3xl:text-3xl",
    secondary: "xs:text-base xl:text-xl 2xl:text-xl 3xl:text-2xl",
    small: "xs:text-[8px] text-[10px] lg:text-[16px]",
  };

  const companyValue = (nova: string, rsg: string, aghs: string) => {
    switch (id) {
      case "aghs":
        return aghs;
      case "nova":
        return nova;
      case "rsg":
        return rsg;

      default:
        break;
    }
  };

  const nextImage = () => {
    if (imgCrsl < stories.length - 1) {
      setImgCrsl((prev) => prev + 1);
    } else {
      setImgCrsl(0);
    }
  };

  const prevImage = () => {
    if (imgCrsl <= 0) {
      setImgCrsl(stories.length - 1);
    } else {
      setImgCrsl((prev) => (prev -= 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [imgCrsl]);

  const VisitWebsite = () => (
    <Link
      className="w-full"
      to={linkWebsite as string}
      target={linkWebsite ? "_blank" : ""}
    >
      <button
        className={`bg-gradient-to-r p-4 xs:py-2 px-4 w-full rounded-md ${companyValue(
          "from-[#0A604B] to-[#4EA993] hover:from-[#084032] hover:to-[#0B4A3B]",
          "from-[#002073] to-[#0047FE] hover:from-[#001A5C] hover:to-[#002B99]",
          "from-[#003A7E] to-[#0075FF] hover:from-[#012E63] hover:to-[#00499F]"
        )} text-[14px] airif flexcenter justify-between`}
      >
        <p className="3xl:text-lg">
          {`VISIT ${companyValue("PULSENOVA.GG", "RSG.GG", "EION.GG")}`}
        </p>
        {linkWebsite && <WhiteArrow />}
      </button>
    </Link>
  );

  const FirstSection = () => (
    <div id="first" className="mx-2 lg:mx- md:mx-4 md:w-[50%]">
      <div className="montserrat flex items-center justify-center lg:gap-0 3xl:gap-3 md:justify-start xl:pt-10 pb-10 lg:pb-0">
        <img className="xs:w-10" src={logo} alt="" />
        <b className={`${text.primary} font`}>{companyName}</b>
      </div>
      <p className="airif mb-10 lg:mt-10 xs:text-xs text-sm 3xl:text-[1rem] text-center sm:text-justify">
        {companyDesc}
      </p>
      <b className={`mt-10 montserrat-bold ${text.secondary}`}>
        {companyOffer}
      </b>
      <div className="my-5 lg:mx-0 grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8">
        {offerList.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              id === "nova" ? "items-center" : "items-start"
            }`}
          >
            <div
              className={`w-full aspect-square bg-gradient-to-br p-[0.1rem] rounded-md ${companyValue(
                "from-[#4FAA94]",
                "from-[#002073]",
                "from-[#0075FF]"
              )} to-[#000000]`}
            >
              <div className="bg-[#242424] w-full h-full flexcenter rounded-md">
                <img className="aspect-square" src={item.img} alt="" />
              </div>
            </div>
            <div
              className={`airif ${text.small} mt-2 ${
                id === "nova" ? "text-center" : "text-left"
              }`}
            >
              {item.service}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:my-10 md:mt-14 lg:mt-24 hidden md:flex">
        <VisitWebsite />
      </div>
    </div>
  );

  const SecondSection = () => (
    <div
      id="second"
      className="hidden md:block mx-2 lg:mx-10 md:mx-4 xl:mx-20 pt-20 md:pt-[6.5rem] lg:pt-32 md:w-[50%]"
    >
      <b className={`mt-10 montserrat-bold ${text.secondary}`}>{storyName}</b>
      <div className="mt-10">
        <div className="relative">
          {stories.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute w-8 h-8 flexcenter rounded-md bg-[#4B4B4B] bg-opacity-80 -right-3 md:-right-5 top-1/2 -translate-y-1/2"
            >
              <WhiteArrow />
            </button>
          )}
          {stories.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute w-8 h-8 flexcenter rounded-md bg-[#4B4B4B] bg-opacity-80 -left-3 md:-left-5 top-1/2 -translate-y-1/2"
            >
              <div className="rotate-180">
                <WhiteArrow />
              </div>
            </button>
          )}
          <div className="flexcenter">
            <img src={stories[imgCrsl].img} alt="" />
          </div>
        </div>
      </div>
      <p className="montserrat-bold text-sm lg:text-lg 3xl:text-lg my-2">
        {stories[imgCrsl].title}
      </p>
      <p className="airif text-xs text-[#939393] lg:text-sm 3xl:text-[1rem] text-center sm:text-justify">
        {stories[imgCrsl].desc}
      </p>
    </div>
  );

  return (
    <div
      id={id}
      className="mx-5 lg:m-10 lg:mx-28 3xl:mx-52 flex flex-col gap-4 lg:mb-0"
    >
      <div
        className={`flex flex-col ${
          reverseFlex ? "md:flex-row-reverse" : "md:flex-row"
        } gap-4`}
      >
        <FirstSection />
        <SecondSection />
      </div>
      <div className="mt-5 md:hidden">
        <VisitWebsite />
      </div>
      {!noLineBreak && (
        <div className="w-full my-14 xs:my-4 xs:mb-8">
          {!noLineBreak && <hr />}
        </div>
      )}
    </div>
  );
}
