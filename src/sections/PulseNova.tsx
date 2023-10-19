import React from "react";

import logo from "../assets/img/section/nova.png";
import nova1 from "../assets/img/section/nova1.png";
import eion1 from "../assets/img/section/eion1.png";
import { GridComponent } from "../components";

export function PulseNova() {
  const images = [nova1, eion1];

  const services = [
    {
      img: "",
      service: (
        <span className="flexcenter text-[#4FAA94]">SOCIAL MEDIA AMPLIFICATION</span>
      ),
    },
    {
      img: "",
      service: <span className="flexcenter text-[#4FAA94]">STREAMING SHOUTOUTS</span>,
    },
    {
      img: "",
      service: <span className="flexcenter text-[#4FAA94]">LIVE EVENT SHOUTOUTS</span>,
    },
    {
      img: "",
      service: <span className="flexcenter text-[#4FAA94]">COMMUNITY TOURNAMENTS</span>,
    },
    {
      img: "",
      service: <span className="flexcenter text-[#4FAA94]">BRANDED VIDEOS</span>,
    },
    {
      img: "",
      service: <span className="flexcenter text-[#4FAA94]">EDUCATIONAL PROGRAMMES</span>,
    },
  ];

  return (
    <div>
      <GridComponent
        id="nova"
        logo={logo}
        companyName="PULSE NOVA"
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
