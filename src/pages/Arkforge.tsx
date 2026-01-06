import { Footer, Navbar } from "../components";
import {
  AghsLab,
  BannerTagline,
  Brands,
  DetailBanner,
  HeroSection,
  InvestorForm,
  Navigation,
  PulseNova,
  RSG,
} from "../sections";
import "../css/arkforge.css";

export function ArkforgePage() {
  return (
    <>
      <div id="arkforge">
        <HeroSection />
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
