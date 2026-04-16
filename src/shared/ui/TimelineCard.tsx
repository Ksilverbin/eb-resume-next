import type { ReactNode } from "react";

interface TimelineCardProps {
  heading: ReactNode;
  meta: string;
  body?: string;
  children?: ReactNode;
}

export function TimelineCard({
  heading,
  meta,
  body,
  children
}: TimelineCardProps) {
  return (
    <article className="timeline-card">
      <div className="timeline-header">
        <h3>{heading}</h3>
        <span>{meta}</span>
      </div>
      {body ? <p className="timeline-body">{body}</p> : null}
      {children}
    </article>
  );
}
