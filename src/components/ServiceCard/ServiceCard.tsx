interface ServiceCardProps {
  icon: string;
  name: string;
  textGradient?: string;
}

export function ServiceCard({
  icon,
  name,
  textGradient = "radial-gradient(1414.09% 100.56% at 1.7% 66.67%, #96B7EF 0%, #6CE5DE 100%)",
}: ServiceCardProps) {
  return (
    <div
      className="w-full max-w-[267px] mx-auto h-[204px] lg:h-[329px] rounded-[16px] border border-[#fff2f2] overflow-hidden flex flex-col items-center justify-between py-4 lg:py-6 px-4 lg:px-5"
      style={{
        background:
          "linear-gradient(144.31deg, rgba(42, 42, 42, 1) 0.72%, rgba(0, 0, 0, 1) 109.87%)",
      }}
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src={icon}
          alt={name}
          className="object-contain w-auto h-auto max-w-[80px] max-h-[80px] lg:max-w-none lg:max-h-none"
        />
      </div>

      <div className="flex items-center justify-center">
        <p
          className="montserrat-bold font-bold text-[10px] lg:text-[16px] text-center uppercase whitespace-pre-line tracking-[0.64px]"
          style={{
            background: textGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.349",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
