import type { GitContributionRepository } from "@/features/git/application/ports";
import type { GitContribution } from "@/features/git/domain/value-objects";
import { LoggingGitContributionRepository } from "../logging";

export class DecoratedGitContributionRepository implements GitContributionRepository {
  private inner: GitContributionRepository;

  public constructor(inner: GitContributionRepository) {
    this.inner = new LoggingGitContributionRepository(inner);
  }

  public async getContributions(username: string): Promise<GitContribution[]> {
    return await this.inner.getContributions(username);
  }
}
