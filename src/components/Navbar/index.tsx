import logo from "../../assets/img/mini logo.png"
export function Navbar() {
    return (
        <header className="bg-black absolute top-0">
            <a href="/" className="">
              <img src={logo} alt="Arkforge" className="md:scale-100 scale-[0.6] md:-ml-0 -ml-8" />
            </a>
        </header>
    )
 }
