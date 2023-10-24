import logo from "../assets/img/section/nova.png";
import nova1 from "../assets/img/pulse-nova/nova1.png";
import nova2 from "../assets/img/pulse-nova/nova2.png";

import sponsor from "../assets/img/pulse-nova/Sponsorship.png";
import gaming from "../assets/img/pulse-nova/Gaming Management-cropped.png";
import community from "../assets/img/pulse-nova/Community Management-cropped.png";
import talent from "../assets/img/pulse-nova/Talent Management - cropped.png";
import pr from "../assets/img/pulse-nova/Public Relations - cropped.png";
import video from "../assets/img/pulse-nova/video - cropped.png";

import { GridComponent } from "../components";

export function PulseNova() {
  const stories = [
    {
      img: nova1,
      title:
        "Leveling Up Engagement: Pulse Nova's Partnership with Pizza Hut in Singapore's Esports Scene",
      desc: `Pulse Nova's unparalleled ability to forge branded partnerships shines through in its collaboration with Pizza Hut. With the primary goal of uniting Singapore's vibrant esports community with the younger demographic, Pulse Nova ensures strong brand awareness and recall. Pizza Hut showcased their products and services through task-based activations, including the creation of branded "Pizza Hut Charity Co-Op" livestreams in collaboration with charitable organizations, exclusive community tournaments featuring professional esports players, and engaging branded livestreams with KOLs to promote new products and campaigns. Pulse Nova's expertise in curating dynamic branded content ensures that partners like Pizza Hut receive maximum visibility and engagement within the gaming and esports world.`,
    },
    {
      img: nova2,
      title: "Pulse Nova's Impactful Partnership with DLLM in Esports",
      desc: "Pulse Nova's prowess in crafting impactful branded partnerships can be seen with a brand such as DLLM. As a jersey sponsor of RSG, Pulse Nova facilitates a unique partnership that not only supports the local esports team but also fosters community engagement and top of the mind recall. DLLM was the official supper venue where fans could come together to relish MLBB gaming and delectable lok lok. This partnership united the community and cultivated a sense of togetherness among fans. Partner showcase opportunities offer distinctive ways for brands to shine, including dedicated branded video content featuring, exclusive branding awareness in local news reports, and special offers for esports fans and gamers. Pulse Nova's expertise ensures that brands like DLLM Lok Lok find a compelling platform to connect with their audience and enhance their visibility within the esports and gaming realm.",
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
    <div>
      <GridComponent
        storyName="CASE STUDIES"
        linkWebsite={`https://pulsenova.gg/`}
        id="nova"
        logo={logo}
        companyName="PULSE NOVA"
        companyDesc="Pulse Nova is a global leader in comprehensive gaming marketing leveraging partnerships with major platforms such as YouTube, Twitch, Facebook and TikTok. With its' globalized network, Pulse Nova's influence extends across North America, Europe, Asia, South America and Middle East. Boasting an impressive 805 million strong fan base, Pulse Nova stands as a testament to unparalleled success in the Esports and Gaming industry. Pulse Nova's strategic positioning and resources solidify our position as a powerhouse in connecting brands with gaming audiences on a global scale."
        companyOffer="SERVICES"
        offerList={services}
        stories={stories}
      />
    </div>
  );
}
