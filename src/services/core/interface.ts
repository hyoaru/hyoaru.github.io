import type { Certification, Project, Social, Technology } from "./types";

export interface ICoreService {
  getTechnologies(): Technology[];
  getProjects(): Project[];
  getCertifications(): Certification[];
  getResumeUrl(): string;
  getSocials(): Social[];
  downloadResume(): void;
}
