import type { Technology } from "@/features/identity/domain/entities";

export interface TechnologyRepository {
  getTechnologies(): Promise<Technology[]>;
}
