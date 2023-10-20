import React from "react";

import logo from "../assets/img/section/aghs.png";
import { GridComponent } from "../components";

import eion from "../assets/img/aghs-lab/eion.png";
import locker from "../assets/img/aghs-lab/locker.png";
import invoke from "../assets/img/aghs-lab/invoke.png";
import story from "../assets/img/aghs-lab/story.png";

export function AghsLab() {
  const images = [story];

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
        storyName="EION"
        id="aghs"
        logo={logo}
        companyName="AGHS LAB"
        companyDesc="Aghs Labs is at the forefront of the web3 solutions industry, specializing in solutions tailored for the talent and esports sectors. We empower the fan economy by harnessing and integrating innovative web3 technologies. We aim to be the bridge connecting gamers as the world transitions from the traditional web2 landscape to the emerging web3 ecosystem."
        companyOffer="PRODUCTS"
        offerList={services}
        imageList={images}
        storyTitle="STEP INTO THE FANTASY REALM OF ESPORTS: Where Fans, Teams, and Players Unite to Create Epic Moments Together!"
        storyDesc="Welcome to Eion, the platform for Locker, Invoke and more esports products developed by Aghs Labs. We are the connecting terminal that aims to bring in all the different esports teams, clubs and fans together into one thriving community."
      />
    </div>
  );
}
