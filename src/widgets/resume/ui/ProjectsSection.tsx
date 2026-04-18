import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";
import { TagList } from "@/shared/ui/TagList";
import { TimelineCard } from "@/shared/ui/TimelineCard";

const resume = getResume();

export function ProjectsSection() {
  return (
    <Section title="Project">
      <div className="stack">
        {resume.projects.map((project) => (
          <TimelineCard
            key={project.id}
            heading={
              <>
                {project.title}
                <small>{project.company}</small>
              </>
            }
            meta={project.period}
            body={project.description}
          >
            <TagList items={project.tags} />
            <ul className="bullet-list project-points">
              {project.introduce.map((item) => (
                <li key={item.id}>
                  <div className="project-point">
                    <strong>{item.subTitle}</strong>
                    <span>: {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </TimelineCard>
        ))}
      </div>
    </Section>
  );
}
