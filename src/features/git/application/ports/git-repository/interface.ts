import type { GitCommit, GitUser } from "@/features/git/domain/entities";
import type { GitContribution } from "@/features/git/domain/value-objects";

export interface GitRepository {
  getRecentCommit(username: string): Promise<GitCommit>;
  getUserInformation(username: string): Promise<GitUser>;
  getContributions(username: string): Promise<GitContribution[]>;
}
