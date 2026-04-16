import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";
import { TagList } from "@/shared/ui/TagList";

const resume = getResume();

export function SkillsSection() {
  return (
    <Section title="Skills">
      <TagList items={resume.skills} />
    </Section>
  );
}
