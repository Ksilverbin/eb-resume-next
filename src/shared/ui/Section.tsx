import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="section">
      {title ? <h2 className="section-title">{title}</h2> : null}
      {children}
    </section>
  );
}
