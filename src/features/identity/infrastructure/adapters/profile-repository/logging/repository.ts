import { type ProfileRepository } from "@/features/identity/application/ports";
import type { Experience } from "@/features/identity/domain/entities";
import { logger } from "@/shared/infrastructure/logger";

export class LoggingProfileRepository implements ProfileRepository {
  private inner: ProfileRepository;

  public constructor(inner: ProfileRepository) {
    this.inner = inner;
  }

  public async getPersonalImageUrl(): Promise<string> {
    try {
      logger.info("Getting personal image url");
      const result = await this.inner.getPersonalImageUrl();
      logger.info(`Successfully got personal image url: ${result}`);
      return result;
    } catch (error) {
      logger.error("Failed to get personal image url", { error });
      throw error;
    }
  }

  public async getCareerHistory(): Promise<Experience[]> {
    try {
      logger.info("Getting career history");
      const result = await this.inner.getCareerHistory();
      logger.info(`Successfully got career history: ${result.length} items`);
      return result;
    } catch (error) {
      logger.error("Failed to get career history", { error });
      throw error;
    }
  }
}
