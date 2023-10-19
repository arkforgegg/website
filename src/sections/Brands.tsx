import uniqlo from "../assets/img/Brands/uniqlo.png";
import amd from "../assets/img/Brands/amd.png";
import pizzahut from "../assets/img/Brands/pizzahut.png";

export function Brands() {
  const brands = [
    uniqlo,
    amd,
    pizzahut,
    uniqlo,
    amd,
    pizzahut,
  ];

  return (
    <div className="text-center mt-10 xl:mt-20 m-5 sm:mx-0">
      <b className="montserrat xl:text-3xl">BRANDS WE HAVE COLLABORATED WITH</b>
      <div className="text-sm my-3 text-[#6C6C6C] airif xl:flex xl:flexcenter">
        <p>Exploring new horizons with our diverse clientele</p>
        <p>- A glimpse into brands we've partnered with</p>
      </div>
      <div className="m-8 xl:mt-20 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-y-8 justify-items-center">
        {brands.map((brand) => (
          <div className="flexcenter">
            <img src={brand} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
