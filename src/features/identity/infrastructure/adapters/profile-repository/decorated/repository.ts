import { type ProfileRepository } from "@/features/identity/application/ports";
import type {
  Certification,
  Experience,
} from "@/features/identity/domain/entities";
import { LoggingProfileRepository } from "../logging";

export class DecoratedProfileRepository implements ProfileRepository {
  private inner: ProfileRepository;

  public constructor(inner: ProfileRepository) {
    this.inner = new LoggingProfileRepository(inner);
  }

  public async getPersonalImageUrl(): Promise<string> {
    return await this.inner.getPersonalImageUrl();
  }

  public async getCareerHistory(): Promise<Experience[]> {
    return await this.inner.getCareerHistory();
  }

  public async getCertifications(): Promise<Certification[]> {
    return await this.inner.getCertifications();
  }
}
