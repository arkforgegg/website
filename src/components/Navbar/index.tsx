import logo from "../../assets/img/mini logo.png"
import fb from "../../assets/img/Facebook.png";
import linked from "../../assets/img/LinkedIn.png";
import twitter from "../../assets/img/X.png"

const socmed = [
  { image: linked, link: '#' },
  { image: fb, link: '#' },
  { image: twitter, link: '#' },
];

export function Navbar() {
    return (
        <header className="bg-black top-0 w-full">
            <div className="flex flex-row items-center justify-between md:px-20 px-2">
                <a href="/" className="">
                    <img src={logo} alt="Arkforge" className="md:scale-100 scale-[0.6] md:-ml-0 -ml-8" />
                </a>
                <div className="gap-2 flex flex-row">
                    {socmed.map(socmeds => (
                        <a target="_blank" href={socmeds.link}>
                            <img src={socmeds.image} alt="Icon" className="w-6 md:w-8"/>
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
 }
