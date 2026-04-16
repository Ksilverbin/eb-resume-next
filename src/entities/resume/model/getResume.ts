import resumeJson from "./resume.json";
import type { ResumeData } from "./types";

export function getResume(): ResumeData {
  return resumeJson as ResumeData;
}
