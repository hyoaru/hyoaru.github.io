import type { Experience } from "@/features/identity/domain/entities";

export interface ProfileRepository {
  getPersonalImageUrl(): Promise<string>;
  getCareerHistory(): Promise<Experience[]>;
}
