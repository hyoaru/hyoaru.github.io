import {
  GitRepositoryError,
  GitRepositoryNoRecentCommitError,
  type GitRepository,
} from "@/features/git/application/ports";
import { GitCommit, GitUser } from "@/features/git/domain/entities";
import type { GithubClient } from "../../../external";

export class GithubGitRepository implements GitRepository {
  private githubClient: GithubClient;

  public constructor(githubClient: GithubClient) {
    this.githubClient = githubClient;
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (error instanceof GitRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new GitRepositoryError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getUser(username: string): Promise<GitUser> {
    return await this.request(async () => {
      const response = await this.githubClient.getUser({ username });
      return new GitUser({ ...response.user });
    });
  }

  public async getRecentCommit(username: string): Promise<GitCommit> {
    return this.request(async () => {
      const response = await this.githubClient.getEvents({ username });
      const recentPushEvent = response.events.find(
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
    });
  }
}
