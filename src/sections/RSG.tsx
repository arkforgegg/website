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
      desc: `In 2022, RSG Philippines achieved a monumental milestone by clinching the MSC Championship, a prestigious Mobile Legends: Bang Bang tournament. With unwavering determination and exceptional gameplay, the team emerged as the undisputed champions, showcasing their skills and teamwork on the global stage. RSG Philippines' victory in the MSC Championship not only marked a moment of triumph for the team but also solidified their position as one of the most formidable forces in the competitive Mobile Legends esports scene. This achievement is a testament to their dedication and skill, earning them a well-deserved place in the annals of esports history.`,
    },
    {
      img: rsg2,
      title: "RSG SG 3-time back to back to back Champions",
      desc: "RSG Singapore has achieved a remarkable feat by becoming three-time champions in the Mobile Legends Professional League Singapore (MPL SG). Their journey to three consecutive MPL SG championships is a testament to their skill and determination, and it cements their legacy as one of the most successful teams in the league's history.",
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
          <ul className="list-disc lg:ml-4">
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
          <ul className="list-disc lg:ml-4">
            <li>{TextBlue("MPL Philippines Season 9 Champions")}</li>
            <li>{TextBlue("MLBB Southeast Asia Cup 2022")}</li>
          </ul>
        </div>
      ),
    },
    {
      img: my,
      service: (
        <div className="">
          <p>RSG MALAYSIA</p>
          <ul className="list-disc lg:ml-4">
            <li>{TextBlue("MPL Malaysia Season 7 Champions")}</li>
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
        companyName="RSG"
        companyDesc="RSG, the premier esports team in Southeast Asia proudly carries a legacy spanning six years, marked by participation in over 200 International competitions and securing over 21 Championship Titles. Fueled by its' relentless pursuit of excellence, RSG stands as Southeast Asia's top esports brand amongst the Southeast Asia gaming audience. Notably RSG has achieved an unparalleled feat as the only esports team to clinch 6 local MPL Championships and 1 regional MSC Championship in the past six years with it's most popular match reaching over 2,300,000 peak concurrent viewers."
        companyOffer="REGIONS CONQUERED"
        offerList={services}
        stories={stories}
      />
    </div>
  );
}
