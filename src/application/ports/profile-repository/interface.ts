import type { Certification, Experience, Project } from "@/domain/entities";

export interface ProfileRepository {
  getCareerHistory(): Promise<Experience[]>;
  getCertifications(): Promise<Certification[]>;
  getProjects(): Promise<Project[]>;
  getTechnologies(): Promise<string[]>;
}
