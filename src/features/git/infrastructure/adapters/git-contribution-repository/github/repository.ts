import { type GitContributionRepository } from "@/features/git/application/ports";
import type { GitContribution } from "@/features/git/domain/value-objects";
import type { GithubContributionsClient } from "../../../external";

export class GithubGitContributionRepository implements GitContributionRepository {
  private githubContributionsClient: GithubContributionsClient;

  public constructor(githubClient: GithubContributionsClient) {
    this.githubContributionsClient = githubClient;
  }
  public async getContributions(username: string): Promise<GitContribution[]> {
    const response = await this.githubContributionsClient.getContributions({
      username,
    });

    return response.contributions;
  }
}
