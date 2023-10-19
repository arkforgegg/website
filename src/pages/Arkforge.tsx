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
import { Footer, Navbar } from "../components";

export function ArkforgePage() {
  return (
    <>
      <Navbar />
      <div id="arkforge">
        <Introduction />
        <DetailBanner />
        <Brands />
        <Navigation />
        <hr className="w-full mb-10 -mt-4 border border-[#3A3A3A]" />
        <PulseNova />
        <RSG />
        <AghsLab />
        <div className="mt-20 xl:mt-32 mb-10 w-full">
          <BannerTagline />
        </div>
        <InvestorForm />
        <Footer />
      </div>
    </>
  );
}
