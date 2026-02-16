import {
  GitContributionRepositoryError,
  type GitContributionRepository,
} from "@/features/git/application/ports";
import type { GitContribution } from "@/features/git/domain/value-objects";
import type { GithubContributionsClient } from "../../../external";

export class GithubGitContributionRepository implements GitContributionRepository {
  private githubContributionsClient: GithubContributionsClient;

  public constructor(githubClient: GithubContributionsClient) {
    this.githubContributionsClient = githubClient;
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (error instanceof GitContributionRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new GitContributionRepositoryError(
        `An error has occured: ${message}`,
        {
          cause: error,
        },
      );
    }
  }

  public async getContributions(username: string): Promise<GitContribution[]> {
    return await this.request(async () => {
      const response = await this.githubContributionsClient.getContributions({
        username,
      });

      return response.contributions;
    });
  }
}
