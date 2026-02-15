import { logger } from "@/shared/infrastructure/logger";
import type { GitContributionRepository } from "@/features/git/application/ports";
import type { GitContribution } from "@/features/git/domain/value-objects";

export class LoggingGitContributionRepository implements GitContributionRepository {
  private inner: GitContributionRepository;

  public constructor(inner: GitContributionRepository) {
    this.inner = inner;
  }
  public async getContributions(username: string): Promise<GitContribution[]> {
    try {
      logger.info(`Fetching contributions for user: ${username}`);
      const contributions = await this.inner.getContributions(username);
      logger.info(`Successfully fetched contributions for user: ${username}`);
      return contributions;
    } catch (error) {
      logger.error(`Error fetching contributions for user: ${username}`);
      throw error;
    }
  }
}
