import {
  AghsLab,
  BannerTagline,
  Brands,
  DetailBanner,
  Introduction,
  InvestorForm,
  Navigation,
  PulseNova,
  RSG,
} from "../sections";
import "../css/arkforge.css";
import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";

export function ArkforgePage() {
  return (
    <>
      <Navbar/>
    <div id="arkforge">
      <Introduction />
      <DetailBanner /> {/* done */}
      <Brands /> {/* done */}
      <Navigation /> {/* need fix */}
      <hr className="w-full mb-10 -mt-4 border border-[#3A3A3A]" />
      <PulseNova />
      <RSG />
      <AghsLab />
      <BannerTagline /> {/* need fix */}
      <InvestorForm /> {/* done */}
      <Footer/>
    </div>
    </>
  );
}
