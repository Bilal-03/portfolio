interface SectionHeaderProps {
  index: string;
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
    <div className={`mb-14 md:mb-20 ${isCenter ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 mb-5 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="text-[11px] font-mono tracking-[0.2em] text-[var(--color-accent)]">
          {index}
        </span>
        <span className="h-px w-8 bg-[var(--color-border)]" />
        <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-text-tertiary)]">
          {label}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.035em] leading-[1.08] text-[var(--color-text-primary)]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-[var(--color-text-tertiary)]">{highlight}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base md:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed max-w-xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
