import logo from "../assets/img/big logo.png"
import rsg from "../assets/img/rsg.png"
import aghslabs from "../assets/img/aghslabs.png"
import pulsenova from "../assets/img/pulsenova.png"
export function Main() {
    return (
        <div className="bg-black  overflow-hidden">
            <div className="flex flex-col items-center w-full justify-center min-h-screen max-h-screen">
                <img src={logo} alt="Arkforge" className="md:mt-0 mt-10" />
                <div className="flex flex-row md:space-x-16 md:my-24 my-10 -space-x-10">
                    <img src={rsg} alt="RSG" className="md:scale-100 scale-[0.5]" />
                    <img src={pulsenova} alt="Pulse Nova" className="md:scale-100 scale-[0.5]" />
                    <img src={aghslabs} alt="Aghs Labs" className="md:scale-100 scale-[0.5]" />
                </div>
                <h1 className="md:text-2xl text-base  text-white montserrat">Refreshing website, we’ll be back soon</h1>
                <p className="text-white roboto md:mt-16 mt-40 md:text-base text-sm ">For Enquiries: <a href="mailto:hello@arkforge.gg">hello@arkforge.gg</a></p>
            </div>

        </div>
    )
}