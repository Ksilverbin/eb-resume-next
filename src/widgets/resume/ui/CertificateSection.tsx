import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";

const resume = getResume();

export function CertificateSection() {
  return (
    <Section title="Certificate">
      <div className="stack compact-stack">
        {resume.certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.id}>
            <strong>{certificate.name}</strong>
            <span>
              {certificate.date} {certificate.organization}
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
