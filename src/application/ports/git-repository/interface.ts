import type { GitCommit, GitUser } from "@/domain/entities";
import type { GitContribution } from "@/domain/value-objects";

export interface GitRepository {
  getRecentCommit(username: string): Promise<GitCommit>;
  getUserInformation(username: string): Promise<GitUser>;
  getContributions(username: string): Promise<GitContribution[]>;
}
