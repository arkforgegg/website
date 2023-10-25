import React from "react";

import logo from "../assets/img/section/rsg.png";
import msc from "../assets/img/rsg/msc.jpg";
import rsg2 from "../assets/img/rsg/rsg2.png";

import sg from "../assets/img/rsg/sg.png";
import my from "../assets/img/rsg/my.png";
import ph from "../assets/img/rsg/ph.png";

import { GridComponent } from "../components";

export function RSG() {
  const stories = [
    {
      img: msc,
      title: "RSG PH MSC 2022 Champions",
      desc: `In 2022, RSG Philippines achieved a monumental victory in the Mobile Legends MSC Championship, solidifying their position as a top esports team. This win showcases their exceptional skills and teamwork on the global stage, earning them a well-deserved place in esports history.`,
    },
    {
      img: rsg2,
      title: "RSG SG 3-time back to back to back Champions",
      desc: "RSG Singapore's three consecutive championships in the Mobile Legends Professional League Singapore (MPL SG) attest to their skill and determination, securing their legacy as one of the league's most successful teams.",
    },
  ];

  const TextBlue = (text: string) => (
    <span className="text-[#0047FE]">{text}</span>
  );

  const services = [
    {
      img: sg,
      service: (
        <div className="">
          <p>RSG SINGAPORE</p>
          <ul className="list-disc lg:ml-4 text-[12px] lg:text-[16px]">
            <li>{TextBlue("MPL SG Season 5 Champions")}</li>
            <li>{TextBlue("MPL SG Season 4 Champions")}</li>
            <li>{TextBlue("MPL SG Season 3 Champions")}</li>
            <li>{TextBlue("MPL MY/SG Season 5 Champions")}</li>
          </ul>
        </div>
      ),
    },
    {
      img: ph,
      service: (
        <div className="">
          <p>RSG PHILIPPINES</p>
          <ul className="list-disc lg:ml-4 text-[12px] lg:text-[16px]">
            <li>{TextBlue("MPL PH Season 9 Champions")}</li>
            <li>{TextBlue("MLBB SEA Cup 2022")}</li>
          </ul>
        </div>
      ),
    },
    {
      img: my,
      service: (
        <div className="">
          <p>RSG MALAYSIA</p>
          <ul className="list-disc lg:ml-4 text-[12px] lg:text-[16px]">
            <li>{TextBlue("MPL MY Season 7 Champions")}</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div>
      <GridComponent
        storyName="SUCCESS STORIES"
        linkWebsite={`https://www.rsg.gg/`}
        id="rsg"
        logo={logo}
        reverseFlex={true}
        companyName="RSG ESPORTS"
        companyDesc="RSG, the leading Southeast Asian esports team, boasts a six-year legacy with over 200 international competitions and 21 Championship Titles. They are Southeast Asia's top esports brand, known for clinching 6 local MPL Championships and 1 regional MSC Championship in the past six years, with their most popular match reaching over 2.3 million peak concurrent viewers."
        companyOffer="REGIONS CONQUERED"
        offerList={services}
        stories={stories}
      />
    </div>
  );
}
