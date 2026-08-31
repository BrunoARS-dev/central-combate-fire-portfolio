type SectionHeadingProps = { label: string; title: string; description?: string; light?: boolean };

export function SectionHeading({ label, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
