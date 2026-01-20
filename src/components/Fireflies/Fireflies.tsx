import firefliesImage from "../../assets/img/bg/firefiles.png";

interface FirefliesProps {
  className?: string;
  rotation?: number;
  opacity?: number;
  position?: "left" | "right";
  top?: string;
  size?: "small" | "large";
}

export function Fireflies({
  className = "",
  rotation = 287.796,
  opacity = 0.5,
  position = "left",
  top = "0",
  size = "large",
}: FirefliesProps) {
  const baseClasses =
    "absolute flex items-center justify-center pointer-events-none";
  const positionClasses =
    position === "left"
      ? size === "small"
        ? "left-[-40px] sm:left-[-60px] md:left-[-80px] lg:left-[-120px] xl:left-[-160px]"
        : "left-[-60px] sm:left-[-100px] md:left-[-150px] lg:left-[-200px] xl:left-[-361px]"
      : size === "small"
      ? "right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-120px] xl:right-[-160px]"
      : "right-[-60px] sm:right-[-100px] md:right-[-150px] lg:right-[-200px] xl:right-[-361px]";

  return (
    <div
      className={`${baseClasses} ${positionClasses} ${className}`}
      style={{ top }}
    >
      <div
        className={`absolute bottom-0 rounded-full blur-[15px] sm:blur-[25px] md:blur-[40px] lg:blur-[60px] xl:blur-[80px] ${
          size === "small"
            ? "w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px]"
            : "w-[150px] h-[150px] sm:w-[225px] sm:h-[225px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[667px] xl:h-[667px]"
        }`}
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
        <div
          className={`relative ${
            size === "small"
              ? "h-[60px] w-[90px] sm:h-[100px] sm:w-[150px] md:h-[150px] md:w-[225px] lg:h-[200px] lg:w-[300px] xl:h-[250px] xl:w-[375px]"
              : "h-[90px] w-[135px] sm:h-[150px] sm:w-[225px] md:h-[220px] md:w-[330px] lg:h-[300px] lg:w-[450px] xl:h-[462.945px] xl:w-[694.851px]"
          }`}
        >
          <img
            src={firefliesImage}
            alt=""
            className="absolute inset-0 w-full h-full object-contain object-center"
            style={{ opacity }}
          />
        </div>
      </div>
    </div>
  );
}
