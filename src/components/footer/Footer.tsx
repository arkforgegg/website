import logos from "../../assets/img/footer/logo_footer.png";
import logo from "../../assets/img/mini logo.png";

import fb from "../../assets/img/Facebook.png";
import linked from "../../assets/img/LinkedIn.png";
import twitter from "../../assets/img/X.png";

const socmed = [
  { image: linked, link: "https://www.linkedin.com/company/arkforge/" },
  { image: fb, link: "https://www.facebook.com/ArkForge.gg" },
  { image: twitter, link: "https://twitter.com/ArkForge" },
];

export function Footer() {
  return (
    <>
      <div className="w-full inset-x-0 bottom-0 bg-black py-6 ">
        <div className="container mx-auto flex md:flex-row flex-col text-white md:px-0 px-8 justify-between w-full">
            <div className="flex flex-col md:mx-auto space-y-4 airif ">
                <img src={logo} className="md:w-80 w-60 md:-ml-0 -ml-3 -mt-4" />
                {/* <p>
                    Empowering Investors with Information and Access. Explore our downloadable resources and reach out to us for any inquiries or opportunities.
                </p>
                <p>
                    Empowering Investors with Information and Access. Explore our downloadable resources and reach out to us for any inquiries or opportunities.
                </p> */}
            </div>
            <div className="flex flex-col md:mx-auto md:space-y-4 space-y-2 montserrat md:text-base text-sm">
                <a href="#" className="font-bold">
                    PULSE NOVA ENTERTAINMENT
                </a>
                <a href="#" className="font-bold">
                    RSG ESPORTS
                </a>
                <a href="#" className="font-bold">
                    AGHS LABS
                </a>
            </div>
            <div className="flex flex-col md:mx-auto space-y-4">
                <p className="font-bold montserrat text-base">CONTACT US</p>
                <p className="airif md:text-sm text-xs">For business inquiries:  <br/><a href="mailto:Hello@arkforge.gg">Hello@arkforge.gg</a></p>
                <p className="airif md:text-sm text-xs">For partnership: <br/><a href="mailto:email@partnership.com">email@partnership.com</a></p>
                <div className="gap-2 flex flex-row">
                    {socmed.map(socmeds => (
                        <a target="_blank" href={socmeds.link}>
                            <img src={socmeds.image} alt="Icon" className="w-6"/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
