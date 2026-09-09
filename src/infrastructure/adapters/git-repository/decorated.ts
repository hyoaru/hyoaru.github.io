import type { GitRepository } from "@/application/ports/git-repository";
import type { GitCommit, GitUser } from "@/domain/entities";
import type { GitContribution } from "@/domain/value-objects";
import { LoggingGitRepository } from "./logging";

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
  public async getContributions(username: string): Promise<GitContribution[]> {
    return this.inner.getContributions(username);
  }
}
