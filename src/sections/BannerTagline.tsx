export function BannerTagline() {
  const details = [
    {
      desc: "EMPOWERING INFLUENCE",
    },
    {
      desc: "CREATING VALUE",
    },
  ];

  return (
    <div className="bg-[#CB0000] flex overflow-hidden gap-10">
      <div className={`carousel-slide flex-shrink-0 p-5`}>
        {details.map((detail) => (
          <b className="montsreat xl:text-[36px] ml-10 lg:ml-28">{detail.desc}</b>
        ))}
      </div>
    </div>
  );
}
