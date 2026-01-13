import logo from "../../assets/img/mini_logo.png";

export function Navbar() {
  return (
    <header className="bg-black top-0 w-full h-[75px]">
      <div className="flex flex-row items-center justify-between h-full md:px-20 px-4">
        <a href="/" className="flex items-center h-full">
          <img
            src={logo}
            alt="Arkforge"
            className="h-[48px] md:h-[48px] object-contain"
          />
        </a>
        <a
          href="#contact"
          className="bg-gradient-to-b from-[#ff0606] to-[#900000] border-[#f21616] border-[0.727px] border-solid flex items-center justify-center h-[40px] px-[16px] py-[10px] rounded-[3.636px] shadow-[0px_0px_35.696px_-3.88px_#ff0606] hover:opacity-90 transition-opacity no-underline"
        >
          <p className="font-['Montserrat',sans-serif] font-black leading-[0] text-[16px] text-white">
            Contact Us
          </p>
        </a>
      </div>
    </header>
  );
}
