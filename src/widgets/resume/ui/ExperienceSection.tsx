import { getResume } from "@/entities/resume/model/getResume";
import { BulletList } from "@/shared/ui/BulletList";
import { Section } from "@/shared/ui/Section";
import { TimelineCard } from "@/shared/ui/TimelineCard";

const resume = getResume();

export function ExperienceSection() {
  return (
    <Section title="Experience">
      <div className="stack">
        {resume.experiences.map((experience) => (
          <TimelineCard
            key={experience.id}
            heading={experience.company}
            meta={experience.period}
            body={experience.description}
          >
            <p className="role-muted">{experience.role}</p>
            <BulletList items={experience.introduce} />
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
