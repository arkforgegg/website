// import React from "react";

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
    <div className="bg-[#CB0000] overflow-x-auto w-full">
      <div className={`flex items-center 2xl:px-24 py-4 xl:py-6 px-8 gap-8`}>
        {details.map((detail) => (
          <b className="montsreat xl:text-[36px]">{detail.desc}</b>
        ))}
      </div>
    </div>
  );
}
