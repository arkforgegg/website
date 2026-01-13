interface ContentCardProps {
  img: string;
  title: string;
  description?: string;
  tags?: string[];
}

export function ContentCard({
  img,
  title,
  description,
  tags,
}: ContentCardProps) {
  return (
    <div
      className="w-full max-w-full rounded-[16px] border border-[#fff2f2] overflow-hidden flex flex-col h-full"
      style={{
        background:
          "linear-gradient(144.31deg, rgba(42, 42, 42, 1) 0.72%, rgba(0, 0, 0, 1) 109.87%)",
      }}
    >
      <div className="w-full min-h-[180px] lg:min-h-[482px] overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-full h-auto max-h-[482px] object-contain"
        />
      </div>

      <div className="flex flex-col p-4 gap-3">
        <h3 className="montserrat-bold font-bold text-[14px] lg:text-[18px] text-white leading-tight">
          {title}
        </h3>

        {description && (
          <p className="font-titillium text-[12px] lg:text-[14px] text-[#939393] leading-normal whitespace-pre-line">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-3 py-1 rounded-[4px] text-[10px] lg:text-[14px] airif text-white border border-[#4FAA94]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(79, 170, 148, 0.1) 0%, rgba(79, 170, 148, 0.05) 100%)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
