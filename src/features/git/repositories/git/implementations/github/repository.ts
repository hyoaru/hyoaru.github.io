import {
  GithubNoRecentPushError,
  HttpGithubClient,
} from "@/features/git/integrations/http-github-client";
import type {
  ContributionStats,
  RecentCommit,
  UserInformation,
} from "../../entities";
import {
  ContributionStatsUnavailableError,
  RecentCommitNotFoundError,
  UserInformationNotFoundError,
} from "../../errors";
import type { GitRepository } from "../../interface";

export class GithubGitRepository implements GitRepository {
  githubClient: HttpGithubClient;

  public constructor(githubClient?: HttpGithubClient) {
    this.githubClient = githubClient ?? new HttpGithubClient();
  }

  public async getRecentCommit(username: string): Promise<RecentCommit> {
    try {
      return await this.githubClient.getRecentCommit(username);
    } catch (error) {
      if (error instanceof GithubNoRecentPushError) {
        throw new RecentCommitNotFoundError(username);
      }

      throw error;
    }
  }

  public async getContributionStats(
    username: string,
  ): Promise<ContributionStats> {
    try {
      return await this.githubClient.getContributionStats(username);
    } catch {
      throw new ContributionStatsUnavailableError(username);
    }
  }

  public async getUserInformation(username: string): Promise<UserInformation> {
    try {
      return await this.githubClient.getUserInformation(username);
    } catch {
      throw new UserInformationNotFoundError(username);
    }
  }
}
