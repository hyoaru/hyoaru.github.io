import type { GitCommit, GitUser } from "@/features/git/domain/entities";

export interface GitRepository {
  getRecentCommit(username: string): Promise<GitCommit>;
  getUser(username: string): Promise<GitUser>;
}
