import firefliesImage from "../../assets/img/bg/firefiles.png";

interface FirefliesProps {
  className?: string;
  rotation?: number;
  opacity?: number;
  position?: "left" | "right";
  top?: string;
}

export function Fireflies({
  className = "",
  rotation = 287.796,
  opacity = 0.5,
  position = "left",
  top = "0",
}: FirefliesProps) {
  const baseClasses =
    "absolute flex items-center justify-center pointer-events-none";
  const positionClasses =
    position === "left"
      ? "left-[-60px] sm:left-[-100px] md:left-[-150px] lg:left-[-200px] xl:left-[-361px]"
      : "right-[-60px] sm:right-[-100px] md:right-[-150px] lg:right-[-200px] xl:right-[-361px]";

  return (
    <div
      className={`${baseClasses} ${positionClasses} ${className}`}
      style={{ top }}
    >
      <div
        className="absolute bottom-0 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[667px] xl:h-[667px] rounded-full blur-[15px] sm:blur-[25px] md:blur-[40px] lg:blur-[60px] xl:blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 0, 0, 0.8) 0%, rgba(255, 0, 0, 0.4) 40%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        className="flex-none relative z-10"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="h-[90px] w-[135px] sm:h-[150px] sm:w-[225px] md:h-[220px] md:w-[330px] lg:h-[300px] lg:w-[450px] xl:h-[462.945px] xl:w-[694.851px] relative">
          <img
            src={firefliesImage}
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover size-full"
            style={{ opacity }}
          />
        </div>
      </div>
    </div>
  );
}
