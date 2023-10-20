import React from "react";

import logo from "../assets/img/section/rsg.png";
import nova1 from "../assets/img/section/nova1.png";
import eion1 from "../assets/img/section/eion1.png";

import sg from "../assets/img/rsg/sg.png";
import my from "../assets/img/rsg/my.png";
import ph from "../assets/img/rsg/ph.png";

import { GridComponent } from "../components";

export function RSG() {
  const images = [nova1, eion1];

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
        companyDesc="RSG, the foremost MOBA esports team, proudly carries a legacy spanning six years, marked by participation in over 200 international competitions and securing an impressive 21 titles. With three dominant domestic teams and a roster of 35 professional players, RSG stands as a powerhouse, commanding a formidable regional presence. Notably, RSG has achieved an unparalleled feat as the only esports team to clinch seven MPL championships across three distinct domestic leagues in the past six years, underscoring their consistent excellence and dominance in the competitive gaming arena."
        companyOffer="REGIONS CONQUERED"
        offerList={services}
        imageList={images}
        storyTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        bibendum vitae quam vitae volutpat."
        storyDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        bibendum vitae quam vitae volutpat. Cras ipsum mi, porttitor a aliquet
        sit amet, accumsan vel nulla. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent bibendum vitae quam vitae volutpat. Cras ipsum
        mi, porttitor a aliquet sit amet, accumsan vel nulla."
      />
    </div>
  );
}
