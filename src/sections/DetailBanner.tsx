// import CountUp from "react-countup";

export function DetailBanner() {

  const details = [
    {
      title: "2015",
      desc: "FOUNDING YEAR",
    },
    {
      title: "5 COUNTRIES",
      desc: "ACROSS SOUTHEAST ASIA",
    },
    {
      title: "600M+",
      desc: "COMMUNITY SIZE",
    },
    {
      title: "20+",
      desc: "GLOBAL BRANDS",
    },
  ];

  return (
    <div
      className={`bg-[#CB0000] w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between 2xl:px-24 py-4 xl:py-6 px-8 gap-4`}
    >
      {details.map((detail) => (
        <div className="flex flex-col justify-center">
          <b className="montsreat xl:text-[36px]">{detail.title}</b>
          <p className="airif text-[9px] xl:text-[16px]">{detail.desc}</p>
        </div>
      ))}
      {/* <CountUp end={1212} /> */}
    </div>
  );
}
