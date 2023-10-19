import { useEffect, useState } from "react";
import { WhiteArrow } from "../Icons";

interface Props {
  id: "nova" | "aghs" | "rsg";
  companyName: string;
  logo: string;
  companyDesc: string;
  companyOffer: string;
  offerList: any[];
  imageList: string[];
  storyTitle: string;
  storyDesc: string;
  reverseFlex?: boolean;
}

export function GridComponent({
  id,
  logo,
  companyName,
  companyDesc,
  companyOffer,
  offerList,
  imageList,
  storyDesc,
  storyTitle,
  reverseFlex,
}: Props) {
  const [imgCrsl, setImgCrsl] = useState(0);

  const nextImage = () => {
    if (imgCrsl < imageList.length - 1) {
      setImgCrsl((prev) => prev + 1);
    } else {
      setImgCrsl(0);
    }
  };

  const prevImage = () => {
    if (imgCrsl <= 0) return;
    setImgCrsl((prev) => (prev -= 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [imgCrsl]);

  const VisitWebsite = () => (
    <button
      className={`bg-gradient-to-r p-4 w-full rounded-md ${
        id === "nova"
          ? "from-[#0A604B] to-[#4EA993] hover:from-[#084032] hover:to-[#0B4A3B]"
          : id === "rsg"
          ? "from-[#002073] to-[#0047FE] hover:from-[#001A5C] hover:to-[#002B99]"
          : id === "aghs"
          ? "from-[#003A7E] to-[#0075FF] hover:from-[#012E63] hover:to-[#00499F]"
          : ""
      } text-[14px] airif flexcenter justify-between`}
    >
      <p className="3xl:text-lg">VISIT WEBSITE</p>
      <WhiteArrow />
    </button>
  );

  return (
    <div id={id} className="mt-10 mx-4 lg:m-10 flex flex-col gap-4 lg:mb-0">
      <div
        className={`flex flex-col ${
          reverseFlex ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-4`}
      >
        <div className="mx-2 lg:mx-10">
          <div className="hmontserrat flex items-center justify-center gap-3 lg:justify-start py-10">
            <img src={logo} alt="" />
            <b className="text-4xl 3xl:text-5xl font">{companyName}</b>
          </div>
          <p className="airif text-[16px] mb-10 lg:mt-10 3xl:text-lg">
            {companyDesc}
          </p>
          <b className="mt-10 montserrat 3xl:text-[40px]">{companyOffer}</b>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {offerList.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  id === "nova" ? "items-center" : "items-start"
                }`}
              >
                <div
                  className={`w-full aspect-square bg-gradient-to-br p-[0.1rem] rounded-md ${
                    id === "nova"
                      ? "from-[#4FAA94]"
                      : id === "rsg"
                      ? "from-[#002073]"
                      : id === "aghs"
                      ? "from-[#0075FF]"
                      : ""
                  } to-[#000000]`}
                >
                  <div className="bg-[#242424] w-full h-full flexcenter rounded-md"></div>
                </div>
                <p
                  className={`airif text-[14px] mt-2 ${
                    id === "nova" ? "text-center" : "text-left"
                  } 3xl:text-xl`}
                >
                  {item.service}
                </p>
              </div>
            ))}
          </div>
          <div className="my-10 mt-24 hidden lg:flex ">
            <VisitWebsite />
          </div>
        </div>
        <div className="mx-2 lg:mx-10 pt-20 lg:pt-40 3xl:mx-40">
          <b className="mt-10 montserrat lg:text-3xl 3xl:text-[40px]">
            SUCCESS STORIES
          </b>
          <div className="my-6">
            <div className="relative">
              <button
                onClick={nextImage}
                className="absolute w-8 h-8 flexcenter rounded-md bg-[#4B4B4B] bg-opacity-80 -right-3 top-1/2 -translate-y-1/2"
              >
                <WhiteArrow />
              </button>
              <button
                onClick={prevImage}
                className="absolute w-8 h-8 flexcenter rounded-md bg-[#4B4B4B] bg-opacity-80 -left-3 top-1/2 -translate-y-1/2"
              >
                <div className="rotate-180">
                  <WhiteArrow />
                </div>
              </button>
              <div className="h-40 lg:h-80">
                <img src={imageList[imgCrsl]} alt="" />
              </div>
            </div>
          </div>
          <p className="airif text-sm lg:text-xl 3xl:text-3xl pt-5">
            {storyTitle}
          </p>
          <p className="airif text-xs mt-2 text-[#939393] lg:text-sm lg:mt-5 3xl:text-sm">
            {storyDesc}
          </p>
        </div>
      </div>
      <div className="mt-5 lg:hidden">
        <VisitWebsite />
      </div>
    </div>
  );
}
