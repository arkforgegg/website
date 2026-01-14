import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { WhiteArrow } from "../Icons";
import { ServiceCard } from "./ServiceCard";

export interface ServiceItem {
  icon: {
    src: string;
    width: number;
    height: number;
  };
  name: string;
}

interface ServicesSwiperProps {
  items: ServiceItem[];
  arrowGradient?: {
    from: string;
    to: string;
  };
  textShadowColor?: string;
  textGradient?: string;
  className?: string;
}

export function ServicesSwiper({
  items,
  arrowGradient,
  textShadowColor,
  textGradient,
  className = "",
}: ServicesSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const defaultGradient = {
    from: "rgba(99, 227, 196, 0.9)",
    to: "rgba(0, 133, 101, 0.9)",
  };

  const gradient = arrowGradient || defaultGradient;

  return (
    <div className={`relative overflow-hidden px-5 mb-8 lg:mb-12 ${className}`}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 26,
          },
        }}
        speed={600}
        className="services-swiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ServiceCard
              icon={item.icon}
              name={item.name}
              textShadowColor={textShadowColor}
              textGradient={textGradient}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isBeginning && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous service"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[41px] h-[46px] rounded-[5px] items-center justify-center"
          style={{
            background: `linear-gradient(180deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
            boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="rotate-180">
            <WhiteArrow />
          </div>
        </button>
      )}

      {!isEnd && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next service"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[41px] h-[46px] rounded-[5px] items-center justify-center"
          style={{
            background: `linear-gradient(180deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
            boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          <WhiteArrow />
        </button>
      )}
    </div>
  );
}
