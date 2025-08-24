import type { Certification, Project, Social, Technology } from "./types";

export interface ICoreService {
  getTechnologies(): Technology[];
  getProjects(): Promise<Project[]>;
  getCertifications(): Certification[];
  getResumeUrl(): string;
  getSocials(): Social[];
  downloadResume(): Promise<void>;
}
