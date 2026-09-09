import type { GitCommit, GitUser } from "@/domain/entities";

export interface GitRepository {
  getRecentCommit(username: string): Promise<GitCommit>;
  getUserInformation(username: string): Promise<GitUser>;
}
