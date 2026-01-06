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
      ? "left-[-361px] md:left-[-300px] lg:left-[-280px] xl:left-[-361px]"
      : "right-[-361px] md:right-[-300px] lg:right-[-280px] xl:right-[-361px]";

  return (
    <div
      className={`${baseClasses} ${positionClasses} ${className}`}
      style={{ top }}
    >
      <div
        className="absolute bottom-0 w-[667px] h-[667px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 0, 0, 0.8) 0%, rgba(255, 0, 0, 0.4) 40%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />
      <div
        className="flex-none relative z-10"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="h-[462.945px] md:h-[350px] lg:h-[400px] xl:h-[462.945px] relative w-[694.851px] md:w-[520px] lg:w-[600px] xl:w-[694.851px]">
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
