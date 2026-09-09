import type { Certification, Experience } from "@/domain/entities";

export interface ProfileRepository {
  getCareerHistory(): Promise<Experience[]>;
  getCertifications(): Promise<Certification[]>;
}
