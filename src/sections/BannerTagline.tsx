export function BannerTagline() {
  return (
    <div className="relative w-full flex items-center justify-center h-[80px] md:h-[129px]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to right, #110000 0.99%, #ff0000 63.161%, #6d0000 105.75%)",
        }}
      />
      <p className="relative montserrat-bold font-bold text-[16px] md:text-[48px] text-white text-center uppercase leading-[1.349] tracking-[0.32px] md:tracking-[1.92px] max-w-[331px] md:max-w-none px-4 md:px-0 whitespace-pre-wrap md:whitespace-normal">
        Enhancing Value Across the{"\n"}Gaming Ecosystem
      </p>
    </div>
  );
}
