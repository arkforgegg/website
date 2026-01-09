import { Footer } from "../components";
import {
  AghsLab,
  BannerTagline,
  Brands,
  EcosystemSection,
  LegacySection,
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
        <LegacySection />
        <Brands />
        <EcosystemSection />
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
