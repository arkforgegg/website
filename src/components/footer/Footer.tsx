import logo from "../../assets/img/logo.png";
import fb from "../../assets/img/Facebook.png";
import linked from "../../assets/img/LinkedIn.png";
import twitter from "../../assets/img/X.png";

const socmed = [
  { image: linked, link: "https://www.linkedin.com/company/arkforge/" },
  { image: fb, link: "https://www.facebook.com/ArkForge.gg" },
  { image: twitter, link: "https://twitter.com/ArkForge_gg" },
];

const footerLinks = [
  { label: "pulse nova", id: "nova" },
  { label: "kYO CARDS", id: "kyocards" },
  { label: "JINADA", id: "jinada" },
  { label: "RSG", id: "rsg" },
];

export function Footer() {
  return (
    <div className="w-full bg-black border-t border-[#212121] pt-[43px] pb-[43px]">
      <div className="container mx-auto max-w-[1283px] px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          <div className="flex flex-col gap-4 w-full md:w-[394px]">
            <img
              src={logo}
              alt="ARKFORGE"
              className="h-[43px] w-auto max-w-[296px]"
            />
            <p className="montserrat-medium text-[18px] text-[#ebebeb] tracking-[0.36px] leading-normal">
              Forging the Future of the ACG Ecosystem
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-[113px]">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="montserrat-bold font-bold text-[16px] text-white uppercase tracking-[0.4px] leading-normal text-left hover:opacity-80 transition-opacity no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-8 w-full md:w-[162px]">
            <p className="montserrat-bold font-bold text-[16px] text-white uppercase tracking-[0.4px] leading-normal">
              contact us
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-[3px] w-full md:w-[123px]">
                <p className="titillium-web text-[14px] text-white leading-normal">
                  For general Inquiries:
                </p>
                <a
                  href="mailto:Hello@arkforge.gg"
                  className="titillium-web text-[14px] text-white underline leading-normal hover:opacity-80 transition-opacity"
                >
                  Hello@arkforge.gg
                </a>
              </div>
              <div className="flex gap-2">
                {socmed.map((social, i) => (
                  <a
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.link}
                    className="w-[34px] h-[34px] hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={social.image}
                      alt="Social icon"
                      className="w-full h-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
