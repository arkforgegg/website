import React from "react";

import logo from "../assets/img/section/nova.png";
import nova1 from "../assets/img/section/nova1.png";
import eion1 from "../assets/img/section/eion1.png";

import sponsor from "../assets/img/pulse-nova/Sponsorship.png";
import gaming from "../assets/img/pulse-nova/Gaming Management-cropped.png";
import community from "../assets/img/pulse-nova/Community Management-cropped.png";
import talent from "../assets/img/pulse-nova/Talent Management - cropped.png";
import pr from "../assets/img/pulse-nova/Public Relations - cropped.png";
import video from "../assets/img/pulse-nova/video - cropped.png";

import { GridComponent } from "../components";

export function PulseNova() {
  const images = [nova1, eion1];

  const services = [
    {
      img: sponsor,
      service: <span className="flexcenter text-[#4FAA94]">SPONSORSHIP</span>,
    },
    {
      img: gaming,
      service: (
        <span className="flexcenter text-[#4FAA94]">
          GAMING EVENT MANAGEMENT
        </span>
      ),
    },
    {
      img: community,
      service: (
        <span className="flexcenter text-[#4FAA94]">COMMUNITY MANAGEMENT</span>
      ),
    },
    {
      img: talent,
      service: (
        <span className="flexcenter text-[#4FAA94]">TALENT BOOKING</span>
      ),
    },
    {
      img: pr,
      service: (
        <span className="flexcenter text-[#4FAA94]">PUBLIC RELATIONS</span>
      ),
    },
    {
      img: video,
      service: (
        <span className="flexcenter text-[#4FAA94]">VIDEO PRODUCTION</span>
      ),
    },
  ];

  return (
    <div>
      <GridComponent
        storyName="CASE STUDIES"
        linkWebsite={`https://pulsenova.gg/`}
        id="nova"
        logo={logo}
        companyName="PULSE NOVA"
        companyDesc="Pulse Nova is a global leader in comprehensive gaming marketing, leveraging partnerships with major platforms such as YouTube, Twitch, Facebook, and TikTok. As an Asian Partner, its influence extends across North America, Europe, Asia, South America, and Latin America. Boasting an impressive 805 million-strong fan base, Pulse Nova stands as a testament to unparalleled success in the esports and gaming industry. Pulse Nova’s widespread network and strategic collaborations solidify their position as a powerhouse in connecting brands with gaming audiences on a global scale."
        companyOffer="SERVICES"
        offerList={services}
        imageList={images}
        storyTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        bibendum vitae quam vitae volutpat."
        storyDesc="Pulse Nova is a global leader in comprehensive gaming marketing, leveraging partnerships with major platforms such as YouTube, Twitch, Facebook, and TikTok. As an Asian Partner, its influence extends across North America, Europe, Asia, South America, and Latin America. Boasting an impressive 805 million-strong fan base, Pulse Nova stands as a testament to unparalleled success in the esports and gaming industry. Pulse Nova’s widespread network and strategic collaborations solidify their position as a powerhouse in connecting brands with gaming audiences on a global scale."
      />
    </div>
  );
}
