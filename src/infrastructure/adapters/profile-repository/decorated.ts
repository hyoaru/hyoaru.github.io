import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { Certification, Experience } from "@/domain/entities";
import { LoggingProfileRepository } from "./logging";

export class DecoratedProfileRepository implements ProfileRepository {
  private inner: ProfileRepository;

  public constructor(inner: ProfileRepository) {
    this.inner = new LoggingProfileRepository(inner);
  }

  public async getCareerHistory(): Promise<Experience[]> {
    return this.inner.getCareerHistory();
  }

  public async getCertifications(): Promise<Certification[]> {
    return this.inner.getCertifications();
  }

  public async getTechnologies(): Promise<string[]> {
    return this.inner.getTechnologies();
  }
}
