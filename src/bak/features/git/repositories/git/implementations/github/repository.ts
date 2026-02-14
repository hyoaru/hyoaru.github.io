import {
  HttpGithubClient,
  HttpGithubClientNoRecentPushError,
  HttpGithubClientRequestError,
} from "@/features/git/integrations/http-github-client";
import type {
  ContributionStats,
  RecentCommit,
  UserInformation,
} from "../../entities";
import {
  GitRepositoryError,
  GitRepositoryContributionStatsUnavailableError,
  GitRepositoryRecentCommitNotFoundError,
  GitRepositoryUserInformationNotFoundError,
} from "../../errors";
import type { GitRepository } from "../../interface";

export class GithubGitRepository implements GitRepository {
  private readonly githubClient: HttpGithubClient;

  public constructor(githubClient?: HttpGithubClient) {
    this.githubClient = githubClient ?? new HttpGithubClient();
  }

  public async getRecentCommit(username: string): Promise<RecentCommit> {
    try {
      return await this.githubClient.getRecentCommit(username);
    } catch (error: unknown) {
      if (
        error instanceof HttpGithubClientNoRecentPushError ||
        (error instanceof HttpGithubClientRequestError && error.status === 404)
      ) {
        throw new GitRepositoryRecentCommitNotFoundError(username, {
          cause: error,
        });
      }

      throw new GitRepositoryError(
        `Failed to retrieve recent commit for ${username}`,
        { cause: error },
      );
    }
  }

  public async getContributionStats(
    username: string,
  ): Promise<ContributionStats> {
    try {
      return await this.githubClient.getContributionStats(username);
    } catch (error: unknown) {
      throw new GitRepositoryContributionStatsUnavailableError(username, {
        cause: error,
      });
    }
  }

  public async getUserInformation(username: string): Promise<UserInformation> {
    try {
      return await this.githubClient.getUserInformation(username);
    } catch (error: unknown) {
      if (
        error instanceof HttpGithubClientRequestError &&
        error.status === 404
      ) {
        throw new GitRepositoryUserInformationNotFoundError(username, {
          cause: error,
        });
      }

      throw new GitRepositoryError(
        `Failed to get user information for ${username}`,
        { cause: error },
      );
    }
  }
}
