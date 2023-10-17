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

export function ArkforgePage() {
  return (
    <div id="arkforge">
      <Introduction />
      <DetailBanner />
      <Brands />
      <Navigation />
      <PulseNova />
      <RSG />
      <AghsLab />
      <BannerTagline />
      <InvestorForm />
    </div>
  );
}
