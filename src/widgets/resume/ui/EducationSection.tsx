import { getResume } from "@/entities/resume/model/getResume";
import { BulletList } from "@/shared/ui/BulletList";
import { Section } from "@/shared/ui/Section";
import { TimelineCard } from "@/shared/ui/TimelineCard";

const resume = getResume();

export function EducationSection() {
  return (
    <Section title="Education">
      <div className="stack">
        {resume.educations.map((education) => (
          <TimelineCard
            key={education.id}
            heading={education.description}
            meta={education.period}
          >
            <BulletList items={education.introduce} />
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
