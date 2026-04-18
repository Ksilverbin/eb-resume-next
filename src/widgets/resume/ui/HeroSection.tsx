import { getResume } from "@/entities/resume/model/getResume";
import { BulletList } from "@/shared/ui/BulletList";
import { Section } from "@/shared/ui/Section";

const resume = getResume();

export function HeroSection() {
  return (
    <Section>
      <div className="hero hero-stack">
        <div>
          <h1>{resume.name}</h1>
          <p className="role">{resume.title}</p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${resume.contact.email}`}>Email</a>
          <a
            href={`https://${resume.contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="headline-box">{resume.headline}</div>
      <BulletList items={resume.introduce} />
    </Section>
  );
}
