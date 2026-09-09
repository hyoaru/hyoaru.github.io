import type { GitRepository } from "@/application/ports/git-repository";
import type { GitCommit, GitUser } from "@/domain/entities";
import { logger } from "@/infrastructure/logger";

export class LoggingGitRepository implements GitRepository {
  private inner: GitRepository;

  public constructor(inner: GitRepository) {
    this.inner = inner;
  }

  public async getRecentCommit(username: string): Promise<GitCommit> {
    try {
      logger.debug(`Fetching recent commit for user: ${username}`);
      const commit = await this.inner.getRecentCommit(username);
      logger.info(`Successfully fetched recent commit for user: ${username}`);
      return commit;
    } catch (error) {
      logger.warn(`Error fetching recent commit for user: ${username}`);
      throw error;
    }
  }

  public async getUserInformation(username: string): Promise<GitUser> {
    try {
      logger.debug(`Fetching user information for user: ${username}`);
      const user = await this.inner.getUserInformation(username);
      logger.info(
        `Successfully fetched user information for user: ${username}`,
      );
      return user;
    } catch (error) {
      logger.warn(`Error fetching user information for user: ${username}`);
      throw error;
    }
  }
}
