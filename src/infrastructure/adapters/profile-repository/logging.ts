import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { Certification, Experience } from "@/domain/entities";
import { logger } from "@/infrastructure/logger";

export class LoggingProfileRepository implements ProfileRepository {
  private inner: ProfileRepository;

  public constructor(inner: ProfileRepository) {
    this.inner = inner;
  }

  public async getCareerHistory(): Promise<Experience[]> {
    try {
      logger.debug(`Fetching career history`);
      const careerHistory = await this.inner.getCareerHistory();
      logger.info(`Successfully fetched career history`);
      return careerHistory;
    } catch (error) {
      logger.warn(`Error fetching career history`);
      throw error;
    }
  }

  public async getCertifications(): Promise<Certification[]> {
    try {
      logger.debug(`Fetching certifications`);
      const certifications = await this.inner.getCertifications();
      logger.info(`Successfully fetched certifications`);
      return certifications;
    } catch (error) {
      logger.warn(`Error fetching certifications`);
      throw error;
    }
  }
}
