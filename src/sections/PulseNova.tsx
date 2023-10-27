import logo from "../assets/img/section/nova.png";
import nova1 from "../assets/img/pulse-nova/nova1.png";
import nova2 from "../assets/img/pulse-nova/nova2.png";

// import sponsor from "../assets/img/pulse-nova/Sponsorship.png";
// import gaming from "../assets/img/pulse-nova/Gaming Management-cropped.png";
// import community from "../assets/img/pulse-nova/Community Management-cropped.png";
// import talent from "../assets/img/pulse-nova/Talent Management - cropped.png";
// import pr from "../assets/img/pulse-nova/Public Relations - cropped.png";
// import video from "../assets/img/pulse-nova/video - cropped.png";
import sponsor from "../assets/img/pulse-nova/Sponsorship.jpg";
import gaming from "../assets/img/pulse-nova/Gaming Event Management.webp";
import community from "../assets/img/pulse-nova/Community Management.jpg";
import talent from "../assets/img/pulse-nova/Talent Booking.jpg";
import pr from "../assets/img/pulse-nova/Public Relation.png";
import video from "../assets/img/pulse-nova/Video Production.webp";

import { GridComponent } from "../components";

export function PulseNova() {
  const stories = [
    {
      img: nova1,
      title:
        "Pulse Nova's Partnership with Pizza Hut in Singapore's Esports Scene",
      desc: `Pulse Nova's expertise in branded partnerships shines through its collaboration with Pizza Hut, uniting the esports community with a younger demographic. Activities include "Pizza Hut Charity Co-Op" livestreams, community tournaments, and KOL-branded livestreams, ensuring strong brand awareness and recall.`,
    },
    {
      img: nova2,
      title: "Pulse Nova's Impactful Partnership with DLLM in Esports",
      desc: "Pulse Nova's partnership with DLLM as a jersey sponsor for RSG goes beyond supporting the local esports team. It fosters community engagement, making DLLM the official supper venue for MLBB gaming. This unique partnership offers brand showcase opportunities, including dedicated video content and special offers for esports fans, enhancing brand visibility in the esports scene.",
    },
  ];

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
    <div className="mt-10 lg:mt-0">
      <GridComponent
        storyName="CASE STUDIES"
        linkWebsite={`https://pulsenova.gg/`}
        id="nova"
        logo={logo}
        companyName="PULSE NOVA ENTERTAINMENT"
        companyDesc="Pulse Nova is a global leader in gaming marketing, partnering with major platforms like YouTube, Twitch, Facebook, and TikTok. With an 805 million-strong fan base and a global presence across North America, Europe, Asia, South America, and the Middle East, we excel in connecting brands with global gaming audiences."
        companyOffer="SERVICES"
        offerList={services}
        stories={stories}
      />
    </div>
  );
}
