// import CountUp from "react-countup";

export function DetailBanner() {
  const details = [
    {
      title: "2015",
      desc: "FOUNDING YEAR",
    },
    {
      title: "5 CONTINENTS",
      desc: "ACROSS SOUTHEAST ASIA",
    },
    {
      title: "805M+",
      desc: "COMMUNITY SIZE",
    },
    {
      title: "100+",
      desc: "GLOBAL BRANDS",
    },
  ];

  return (
    <div
      className={`bg-[#CB0000] w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between 2xl:px-52 py-4 xl:py-6 px-8 gap-4`}
    >
      {details.map((detail, i) => (
        <div key={i} className="flex flex-col justify-center">
          <b className="montsreat xl:text-[40px]">{detail.title}</b>
          <p className="airif text-[9px] xl:text-[20px]">{detail.desc}</p>
        </div>
      ))}
      {/* <CountUp end={1212} /> */}
    </div>
  );
}
