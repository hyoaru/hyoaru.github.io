import {
  type GitRepository,
  GitRepositoryError,
  GitRepositoryNoRecentCommitError,
} from "@/application/ports/git-repository";
import { GitCommit, GitUser } from "@/domain/entities";
import type { GithubClient } from "@/infrastructure/external/github-client";

export class GithubGitRepository implements GitRepository {
  private githubClient: GithubClient;

  public constructor(githubClient: GithubClient) {
    this.githubClient = githubClient;
  }

  public async getUserInformation(username: string): Promise<GitUser> {
    try {
      const response = await this.githubClient.getUserInformation(username);

      return new GitUser({
        username: response.username,
        publicRepositories: response.publicRepositories,
        company: response.company,
        location: response.location,
        hireable: response.hireable,
        createdAt: response.createdAt,
        updatedAt: response.updatedAt,
      });
    } catch (error) {
      if (error instanceof GitRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new GitRepositoryError(`Get user information error: ${message}`, {
        cause: error,
      });
    }
  }

  public async getRecentCommit(username: string): Promise<GitCommit> {
    try {
      const response = await this.githubClient.getUserEvents(username);

      const recentPushEvent = response.find(
        (event) => event.type === "PushEvent",
      );

      if (!recentPushEvent)
        throw new GitRepositoryNoRecentCommitError(username);

      return new GitCommit({
        id: recentPushEvent.id,
        username: recentPushEvent.actor.username,
        createdAt: recentPushEvent.createdAt,
        repository: recentPushEvent.repository.name,
      });
    } catch (error) {
      if (error instanceof GitRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new GitRepositoryError(`Get recent commit error: ${message}`, {
        cause: error,
      });
    }
  }
}
