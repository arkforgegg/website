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
