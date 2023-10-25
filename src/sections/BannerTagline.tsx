export function BannerTagline() {
  const details = [
    {
      desc: "EMPOWERING GAMING",
    },
    {
      desc: "AMPLIFYING INFLUENCE",
    },
    {
      desc: "ASIA'S BIGGEST GAMER COMMUNITY",
    },
  ];

  return (
    <>

      {/* <div className="bg-[#CB0000] flex overflow-hidden gap-10 marquee">
        <div className={`flex-shrink-0 p-5`}>
          {details.map((detail, i) => (
            <b key={i} className="montsreat xl:text-[36px] ml-10 lg:ml-28">
              {detail.desc}
            </b>
          ))}
        </div>
      </div>
      <br/>
      <div className="bg-[#CB0000] flex marquee">
        <div className={``}>
          <b className="montsreat xl:text-[36px]">
            &nbsp; &nbsp; &nbsp; EMPOWERING GAMING &nbsp; &nbsp; &nbsp; AMPLIFYING INFLUENCE &nbsp; &nbsp; &nbsp; ASIA'S BIGGEST GAMER COMMUNITY
          </b>
          <b className="montsreat xl:text-[36px]">
            &nbsp; &nbsp; &nbsp; EMPOWERING GAMING &nbsp; &nbsp; &nbsp; AMPLIFYING INFLUENCE &nbsp; &nbsp; &nbsp; ASIA'S BIGGEST GAMER COMMUNITY
          </b>
        </div>
      </div>
      <br /> */}
      <div className="marquee bg-[#CB0000] md:py-10 py-6">
        <div className="marquee__content">
          <ul className="list-inline montsreat xl:text-[36px] font-bold">
            <li className="lg:mx-16 mx-10">EMPOWERING GAMING</li>
            <li className="lg:mx-16 mx-10">AMPLIFYING INFLUENCE</li>
            <li className="mx-16">ASIA'S BIGGEST GAMER COMMUNITY</li>
          </ul>
          <ul className="list-inline montsreat xl:text-[36px] font-bold">
            <li className="lg:mx-16 mx-10">EMPOWERING GAMING</li>
            <li className="lg:mx-16 mx-10">AMPLIFYING INFLUENCE</li>
            <li className="lg:mx-16 mx-10">ASIA'S BIGGEST GAMER COMMUNITY</li>
          </ul>
          <ul className="list-inline montsreat xl:text-[36px] font-bold">
            <li className="lg:mx-16 mx-10">EMPOWERING GAMING</li>
            <li className="lg:mx-16 mx-10">AMPLIFYING INFLUENCE</li>
            <li className="lg:mx-16 mx-10">ASIA'S BIGGEST GAMER COMMUNITY</li>
          </ul>
        </div>
      </div>

    </>
  );
}
