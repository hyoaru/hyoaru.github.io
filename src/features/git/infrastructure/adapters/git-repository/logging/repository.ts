import { logger } from "@/core/infrastructure/logger";
import type { GitRepository } from "@/features/git/application/ports";
import type { GitCommit, GitUser } from "@/features/git/domain/entities";

export class LoggingGitRepository implements GitRepository {
  private inner: GitRepository;

  public constructor(inner: GitRepository) {
    this.inner = inner;
  }

  public async getRecentCommit(username: string): Promise<GitCommit> {
    try {
      logger.info(`Fetching recent commit for user: ${username}`);
      const commit = await this.inner.getRecentCommit(username);
      logger.info(`Successfully fetched recent commit for user: ${username}`);
      return commit;
    } catch (error) {
      logger.error(`Error fetching recent commit for user: ${username}`);
      throw error;
    }
  }

  public async getUserInformation(username: string): Promise<GitUser> {
    try {
      logger.info(`Fetching user information for user: ${username}`);
      const user = await this.inner.getUserInformation(username);
      logger.info(
        `Successfully fetched user information for user: ${username}`,
      );
      return user;
    } catch (error) {
      logger.error(`Error fetching user information for user: ${username}`);
      throw error;
    }
  }
}
