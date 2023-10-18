import React from "react";

import logo from "../assets/img/section/aghs.png";
import nova1 from "../assets/img/section/nova1.png";
import eion1 from "../assets/img/section/eion1.png";
import { GridComponent } from "../components";

export function AghsLab() {
  const images = [nova1, eion1];

  const TextBlue = (text: string) => (
    <span className="text-[#0075FF]">{text}</span>
  );

  const services = [
    {
      img: "",
      service: (
        <div className="">
          <p>EION</p>
          <span>{TextBlue("WEB2")}</span>
        </div>
      ),
    },
    {
      img: "",
      service: (
        <div className="">
          <p>LOCKER</p>
          <span>{TextBlue("FANTASY LEAGUE")}</span>
        </div>
      ),
    },
    {
      img: "",
      service: (
        <div className="">
          <p>INVOKE</p>
          <span>{TextBlue("FANTASY LEAGUE")}</span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <GridComponent
        id="aghs"
        logo={logo}
        companyName="AGHS LAB"
        companyDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        bibendum vitae quam vitae volutpat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent bibendum vitae quam vitae
        volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent bibendum vitae quam vitae volutpat."
        companyOffer="SERVICES"
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
