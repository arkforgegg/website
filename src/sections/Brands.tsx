import uniqlo from "../assets/img/Brands/uniqlo.png";
import blizzard from "../assets/img/Brands/Blizzard.png";
import pizzahut from "../assets/img/Brands/pizzahut.png";
import amd from "../assets/img/Brands/amd.png";
import samsung from "../assets/img/Brands/samsung.png";
import omni from "../assets/img/Brands/OmniDream.png";
import prism from "../assets/img/Brands/Prism.png";
import singtel from "../assets/img/Brands/Singtel.png";
import logitech from "../assets/img/Brands/logitech.png";
import mixmarvel from "../assets/img/Brands/mixmarvel.png";
import games2k from "../assets/img/Brands/2k Games.png";
import omnidesk from "../assets/img/Brands/omnidesk.png";
import oneEsport from "../assets/img/Brands/ONE Esports.png";
import tecno from "../assets/img/Brands/tecno-logo.png";
import jdsport from "../assets/img/Brands/jd-sports.png";
import secretLab from "../assets/img/Brands/SecretLab.png";
import iLuvTaimei from "../assets/img/Brands/ilovetaimei.png";
import mihoyo from "../assets/img/Brands/MiHoYo.png";
import tencent from "../assets/img/Brands/tencent.png";
import tiktok from "../assets/img/Brands/TikTok.png";
import osim from "../assets/img/Brands/osim.png";
import byteDance from "../assets/img/Brands/ByteDance.png";
import moonton from "../assets/img/Brands/moonton.png";
import lilithGames from "../assets/img/Brands/lilith-games.png";
import iteaLogo from "../assets/img/Brands/itea-logo.png";
import myrepublic from "../assets/img/Brands/myrepublic.png";
import netease from "../assets/img/Brands/netease.png";
import oppoLogo from "../assets/img/Brands/oppo-logo.png";
import paperGames from "../assets/img/Brands/paper-games.png";
import pathea from "../assets/img/Brands/pathea.png";
import seasun from "../assets/img/Brands/seasun.png";
import xdCom from "../assets/img/Brands/xd-com.png";
import dxracerLogo from "../assets/img/Brands/dxracer-logo.png";
import fhyxCom from "../assets/img/Brands/fhyx-com.png";
import funplus from "../assets/img/Brands/funplus.png";
import huanlehuyu from "../assets/img/Brands/huanlehuyu.png";

export function Brands() {
  const brands = [
    uniqlo,
    blizzard,
    pizzahut,
    samsung,
    amd,
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
    osim,
    byteDance,
    moonton,
    lilithGames,
    iteaLogo,
    myrepublic,
    netease,
    oppoLogo,
    paperGames,
    pathea,
    seasun,
    xdCom,
    dxracerLogo,
    fhyxCom,
    funplus,
    huanlehuyu,
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative mt-8 md:mt-10 xl:mt-20 w-full overflow-hidden">
      <div className="brands-carousel-container">
        <div className="brands-carousel-content">
          {duplicatedBrands.map((brand, i) => (
            <div key={i} className="brands-carousel-item">
              <img src={brand} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
