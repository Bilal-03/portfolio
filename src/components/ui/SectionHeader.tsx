interface SectionHeaderProps {
  index?: string;
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  index,
  label,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center" : ""}`}>
      <div
        className={`eyebrow ${isCenter ? "justify-center" : ""}`}
      >
        {index && <span className="eyebrow-index">{index}</span>}
        <span>{label}</span>
      </div>

      <h2 className="section-title">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="section-title-muted">{highlight}</span>
          </>
        )}
      </h2>

      {description && (
        <p className={`section-description ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
