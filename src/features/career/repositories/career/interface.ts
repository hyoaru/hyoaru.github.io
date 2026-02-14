import type { CareerExperience } from "./entities";

export interface CareerRepository {
  getExperiences(): Promise<CareerExperience[]>;
}
