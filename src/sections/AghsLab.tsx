import React from "react";

import logo from "../assets/img/section/aghs.png";
import { GridComponent } from "../components";

import eion from "../assets/img/aghs-lab/eion.png";
import locker from "../assets/img/aghs-lab/locker.png";
import invoke from "../assets/img/aghs-lab/invoke.png";
import story from "../assets/img/aghs-lab/story.png";

export function AghsLab() {
  const stories = [
    {
      img: story,
      title:
        "STEP INTO THE FANTASY REALM OF ESPORTS: Where Fans, Teams, and Players Unite to Create Epic Moments Together!",
      desc: "Welcome to Eion, the platform for Locker, Invoke and more esports products developed by Aghs Labs. We are the connecting terminal that aims to bring in all the different esports teams, clubs and fans together into one thriving community.",
    },
  ];

  const TextBlue = (text: string) => (
    <span className="text-[#0075FF]">{text}</span>
  );

  const services = [
    {
      img: eion,
      service: (
        <div className="">
          <p>EION</p>
          <span>{TextBlue("Collectible Esports Fantasy Digital Cards")}</span>
        </div>
      ),
    },
    {
      img: locker,
      service: (
        <div className="">
          <p>LOCKER</p>
          <span>{TextBlue("Prediction Based Card Game")}</span>
        </div>
      ),
    },
    {
      img: invoke,
      service: (
        <div className="">
          <p>INVOKE</p>
          <span>{TextBlue("Esports Fantasy League")}</span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <GridComponent
        noLineBreak={true}
        storyName="EION"
        id="aghs"
        logo={logo}
        linkWebsite="https://eion.gg/"
        companyName="AGHS LABS"
        companyDesc="Aghs Labs is at the forefront of bridging Web 2 to Web 3 through specializing in solutions tailored for IP owners within the gaming space. Aghs Labs aims to empower the fan economy by harnessing and integrating innovative web3 technologies and introducing engaging highly complimentary and synergistic gaming products to the real gamers. Aghs Labs believes that the future of a sustainable ecosystem for IP owners can be achieved through precision and quality definition while implementing cross reality mechanisms and creating utility and value. "
        companyOffer="PRODUCTS"
        offerList={services}
        stories={stories}
      />
    </div>
  );
}
