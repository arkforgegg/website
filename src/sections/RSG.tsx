import React from "react";

import logo from "../assets/img/section/rsg.png";
import nova1 from "../assets/img/section/nova1.png";
import eion1 from "../assets/img/section/eion1.png";
import { GridComponent } from "../components";

export function RSG() {
  const images = [nova1, eion1];

  const TextBlue = (text: string) => (
    <span className="text-[#0047FE]">{text}</span>
  );

  const services = [
    {
      img: "",
      service: (
        <div className="">
          <p>RSG MALAYSIA</p>
          <span>
            {TextBlue("MLBB")} / {TextBlue("LOL")} / {TextBlue("PUBG")}
          </span>
        </div>
      ),
    },
    {
      img: "",
      service: (
        <div className="">
          <p>RSG PHILIPPINES</p>
          <span>
            {TextBlue("MLBB")} / {TextBlue("LOL")} / {TextBlue("PUBG")}
          </span>
        </div>
      ),
    },
    {
      img: "",
      service: (
        <div className="">
          <p>RSG SINGAPORE</p>
          <span>
            {TextBlue("MLBB")} / {TextBlue("PUBG")}
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <GridComponent
        id="rsg"
        logo={logo}
        reverseFlex={true}
        companyName="RSG"
        companyDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        bibendum vitae quam vitae volutpat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent bibendum vitae quam vitae
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent bibendum vitae quam vitae volutpat."
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
