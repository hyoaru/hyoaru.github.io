import type { GitRepository } from "@/features/git/application/ports";
import type { GitCommit, GitUser } from "@/features/git/domain/entities";
import { LoggingGitRepository } from "../logging";

export class DecoratedGitRepository implements GitRepository {
  private inner: GitRepository;

  public constructor(inner: GitRepository) {
    this.inner = new LoggingGitRepository(inner);
  }

  public async getRecentCommit(username: string): Promise<GitCommit> {
    return this.inner.getRecentCommit(username);
  }
  public async getUserInformation(username: string): Promise<GitUser> {
    return this.inner.getUserInformation(username);
  }
}
