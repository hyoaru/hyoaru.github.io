import type { GitContribution } from "@/features/git/domain/value-objects";

export interface GitContributionRepository {
  getContributions(username: string): Promise<GitContribution[]>;
}
