import rsg from "../assets/img/navigation/rsg.png";
import nova from "../assets/img/navigation/pulse_nova.png";
import aghs from "../assets/img/navigation/aghs.png";

export function Navigation() {
  const navs = [
    {
      title: "PULSE NOVA",
      image: nova,
    },
    {
      title: "RSG",
      image: rsg,
    },
    {
      title: "AGHS LAB",
      image: aghs,
    },
  ];

  return (
    <div className="airif flex items-center justify-between my-10 gap-2 sm:gap-10 sm:px-5 text-[16px] bg-[#1313131] border border-[#5E5E5E] py-3 px-2 rounded-md">
      {navs.map((nav, i) => (
        <button
          className="flexcenter gap-1 bg-[#4B4B4B] rounded-md px-1 sm:px-4 py-2"
          key={i}
        >
          <img src={nav.image} alt="" />
          <p>{nav.title}</p>
        </button>
      ))}
    </div>
  );
}
