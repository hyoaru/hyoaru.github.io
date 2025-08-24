import type { Certification, Project, Social, Technology } from "./types";

export interface ICoreService {
  getTechnologies(): Promise<Technology[]>;
  getProjects(): Promise<Project[]>;
  getCertifications(): Promise<Certification[]>;
  getResumeUrl(): string;
  getSocials(): Promise<Social[]>;
  downloadResume(): Promise<void>;
}
