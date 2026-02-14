import type { Technology } from "./entities";

export interface TechnologyRepository {
  getTechnologies(): Promise<Technology[]>;
}
