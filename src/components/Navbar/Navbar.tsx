import { useState, useEffect, useRef } from "react";
import logo from "../../assets/img/logo.png";

const menuItems = [
  { label: "About Us", href: "#about-us" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "Pulse Nova", href: "#nova" },
  { label: "Kyo Cards", href: "#kyocards" },
  { label: "JINADA", href: "#jinada" },
  { label: "RSG", href: "#rsg" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveItem(href);
  };

  return (
    <header className="bg-transparent top-0 w-full h-[75px] relative z-50">
      <div className="flex flex-row items-center justify-between h-full md:px-20 px-4">
        <a href="/" className="flex items-center h-full max-w-[155px]">
          <img
            src={logo}
            alt="Arkforge"
            className="w-full h-full object-contain"
          />
        </a>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gradient-to-b from-[#ff0606] to-[#900000] border-[#f21616] border-[0.727px] border-solid flex items-center justify-center h-[40px] px-[16px] rounded-[3.636px] hover:opacity-90 transition-opacity"
            aria-label="Toggle menu"
          >
            <span className="font-['Montserrat',sans-serif] font-black leading-[0] text-[16px] text-white">
              Explore <span className="hidden lg:inline">ArkForge</span>
            </span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 top-[48px] mt-2 bg-black border border-[#f21616] rounded-[3.636px] min-w-[185px] py-5 px-6 flex flex-col gap-3 z-50">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => handleMenuItemClick(item.href)}
                  className={`font-titillium leading-normal text-[16px] lg:text-[20px] no-underline transition-colors text-center ${activeItem === item.href
                    ? "bg-gradient-to-r from-[#F00] from-0% via-[#FF9D4C] via-51.93% to-[#F00] to-100% bg-clip-text text-transparent"
                    : "text-white hover:bg-gradient-to-r from-[#F00] from-0% via-[#FF9D4C] via-51.93% to-[#F00] to-100% hover:bg-clip-text hover:text-transparent"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
