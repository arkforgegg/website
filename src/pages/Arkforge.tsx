import { Footer } from "../components";
import {
  BannerTagline,
  Brands,
  EcosystemSection,
  LegacySection,
  HeroSection,
  InvestorForm,
  Navigation,
  PulseNova,
  KyoCards,
  Jinada,
  RSG,
} from "../sections";
import "../css/arkforge.css";

export function ArkforgePage() {
  return (
    <main id="arkforge">
      <HeroSection />
      <LegacySection />
      <Brands />
      <EcosystemSection />
      <Navigation />
      <PulseNova />
      <KyoCards />
      <Jinada />
      <RSG />

      <BannerTagline />

      <InvestorForm />
      <Footer />
    </main>
  );
}
