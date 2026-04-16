import { CertificateSection } from "@/widgets/resume/ui/CertificateSection";
import { EducationSection } from "@/widgets/resume/ui/EducationSection";
import { ExperienceSection } from "@/widgets/resume/ui/ExperienceSection";
import { HeroSection } from "@/widgets/resume/ui/HeroSection";
import { ProjectsSection } from "@/widgets/resume/ui/ProjectsSection";
import { SkillsSection } from "@/widgets/resume/ui/SkillsSection";
import { formatUpdatedAt } from "@/shared/lib/date/formatUpdatedAt";

export default function Page() {
  const updatedAt = formatUpdatedAt();

  return (
    <main className="page-shell">
      <div className="page-glow page-glow-a" />
      <div className="page-glow page-glow-b" />
      <div className="content-wrap">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificateSection />
      </div>

      <footer className="footer">
        마지막 업데이트 일시 : {updatedAt}.
      </footer>
    </main>
  );
}
