import { getResume } from "@/entities/resume/model/getResume";
import { Section } from "@/shared/ui/Section";

const resume = getResume();

export function CertificateSection() {
  return (
    <Section title="Certificate">
      <div className="tag-row certificate-row">
        {resume.certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.id}>
            <strong>{certificate.name}</strong>
            <span className="timeline-meta">
              ({certificate.date} {certificate.organization})
            </span>
          </article>
        ))}
      </div>
    </Section>
  );
}
