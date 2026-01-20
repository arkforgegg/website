import logo from "../../assets/img/logo.png";
import instagram from "../../assets/img/instagram.png";

const footerLinks = [
  {
    label: "pulse nova",
    igLink: "https://www.instagram.com/pulsenova.ent",
    href: "https://pulsenova.gg/",
    id: "nova",
  },
  {
    label: "kyo cards",
    igLink: "https://www.instagram.com/kyocards",
    href: "https://kyocards.com/",
    id: "kyocards",
  },
  {
    label: "jinada",
    igLink: "https://www.instagram.com/jinada.gg",
    href: "https://jinada.gg/",
    id: "jinada",
  },
  {
    label: "rsg",
    igLink: "https://www.instagram.com/rsg.malaysia",
    href: "https://www.rsg.gg/",
    id: "rsg",
  },
];

export function Footer() {
  return (
    <div className="w-full bg-black border-t border-[#212121] pt-[43px] pb-[100px] relative overflow-hidden">
      <div className="container mx-auto max-w-[1283px] px-4 md:px-0 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          <div className="flex flex-col gap-2 w-full md:w-[390px]">
            <img
              src={logo}
              alt="ARKFORGE"
              className="max-w-[296px]"
            />
            <p className="font-montserrat text-[18px] text-[#ebebeb] tracking-[0.36px] leading-normal">
              Where ACG Worlds Are Forged
            </p>
          </div>

          <div className="flex flex-col gap-6 w-[150px]">
            <p className="montserrat-bold font-bold text-[16px] text-white uppercase tracking-[0.4px] leading-normal">
              our ecosystem
            </p>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center gap-2 justify-between"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-titillium text-[14px] text-white uppercase tracking-[0.4px] leading-normal text-left hover:opacity-80 transition-opacity no-underline"
                  >
                    {link.label}
                  </a>
                  <a
                    href={link.igLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
