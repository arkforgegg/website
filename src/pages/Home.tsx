import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export function Home() {
  return (
    <>
      <section className="max-h-auto height relative h-auto min-h-screen w-full overflow-hidden overflow-x-hidden">
        <Navbar />
        <Main />
        <Footer />
      </section>
    </>
  );
}
