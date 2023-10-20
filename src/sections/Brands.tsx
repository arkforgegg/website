import uniqlo from "../assets/img/Brands/uniqlo.png";
import blizzard from "../assets/img/Brands/Blizzard.png";
import pizzahut from "../assets/img/Brands/pizzahut.png";
import amd from "../assets/img/Brands/amd.png";
import legion from "../assets/img/Brands/legion.png";
import samsung from "../assets/img/Brands/samsung.png";
import omni from "../assets/img/Brands/OmniDream Games.png";
import prism from "../assets/img/Brands/Prism-Logo-Transparent-Black.png";
import singtel from "../assets/img/Brands/Singtel_logo.svg.png";
import logitech from "../assets/img/Brands/logitech-logo-3.png";
import mixmarvel from "../assets/img/Brands/mix marvel logo.png";
import games2k from "../assets/img/Brands/2k Games.png";
import omnidesk from "../assets/img/Brands/omnidesk.webp";
import oneEsport from "../assets/img/Brands/ONE Esports.png";
import tecno from "../assets/img/Brands/tecno-logo.png";
import jdsport from "../assets/img/Brands/jd-sports.png";
import secretLab from "../assets/img/Brands/Transparent_SecretLab_Logo.png";
import iLuvTaimei from "../assets/img/Brands/ilovetaimei logo.png";
import mihoyo from "../assets/img/Brands/MiHoYo.svg.png";
import tencent from "../assets/img/Brands/tencent logo.png";
import tiktok from "../assets/img/Brands/TikTok_logo.svg.png";
// import osim from "../assets/img/Brands/osim";
import byteDance from "../assets/img/Brands/ByteDance_logo_English.svg.png";
import moonton from "../assets/img/Brands/moonton-logo.jpg";

export function Brands() {
  const brands = [
    uniqlo,
    blizzard,
    pizzahut,
    amd,
    legion,
    samsung,
    omni,
    prism,
    singtel,
    logitech,
    mixmarvel,
    games2k,
    omnidesk,
    oneEsport,
    tecno,
    jdsport,
    secretLab,
    iLuvTaimei,
    mihoyo,
    tencent,
    tiktok,
    // osim,
    byteDance,
    moonton,
  ];

  return (
    <div className="text-center mt-10 xl:mt-20 m-5 sm:mx-0">
      <b className="montserrat xl:text-3xl">BRANDS WE HAVE COLLABORATED WITH</b>
      <div className="text-sm my-3 text-[#6C6C6C] airif xl:flex xl:flexcenter">
        <p>Exploring new horizons with our diverse clientele</p>
        <p>- A glimpse into brands we've partnered with</p>
      </div>
      <div className="m-8 xl:mt-20 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-y-8 justify-items-center">
        {brands.map((brand, i) => (
          <div key={i} className="flexcenter">
            <img className="grayscale" src={brand} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
