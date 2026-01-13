import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { WhiteArrow } from "../Icons";
import { ContentCard } from "./ContentCard";

export interface ContentItem {
  img: string;
  title: string;
  description?: string;
  tags?: string[];
}

interface ContentSwiperProps {
  items: ContentItem[];
  arrowGradient?: {
    from: string;
    to: string;
  };
  className?: string;
}

export function ContentSwiper({
  items,
  arrowGradient,
  className = "",
}: ContentSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const defaultGradient = {
    from: "rgba(99, 227, 196, 0.9)",
    to: "rgba(0, 133, 101, 0.9)",
  };

  const gradient = arrowGradient || defaultGradient;

  useEffect(() => {
    const updateCardHeights = () => {
      const heights = cardsRef.current
        .filter((card) => card !== null)
        .map((card) => {
          if (card) {
            card.style.height = "auto";
            return card.offsetHeight;
          }
          return 0;
        });

      const maxHeight = Math.max(...heights, 0);

      if (maxHeight > 0) {
        cardsRef.current.forEach((card) => {
          if (card) {
            card.style.height = `${maxHeight}px`;
          }
        });
      }

      swiperRef.current?.update();
    };

    const timeoutId = setTimeout(updateCardHeights, 100);
    const images = document.querySelectorAll(".content-swiper img");

    const imageLoadPromises = Array.from(images).map((img) => {
      if ((img as HTMLImageElement).complete) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    });

    Promise.all(imageLoadPromises).then(() => {
      setTimeout(updateCardHeights, 50);
    });

    window.addEventListener("resize", updateCardHeights);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateCardHeights);
    };
  }, [items]);

  return (
    <div className={`relative overflow-hidden px-3 mb-8 lg:mb-12 ${className}`}>
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
        slidesPerView={1}
        spaceBetween={26}
        speed={600}
        observer={true}
        observeParents={true}
        className="content-swiper case-study-swiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <div
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="h-full"
            >
              <ContentCard
                img={item.img}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {!isBeginning && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:w-[41px] lg:h-[46px] w-[32px] h-[36px] rounded-[5px] items-center justify-center"
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
          className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:w-[41px] lg:h-[46px] w-[32px] h-[36px] rounded-[5px] items-center justify-center"
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
