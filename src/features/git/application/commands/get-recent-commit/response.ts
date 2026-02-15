import type { GitCommit } from "@/features/git/domain/entities";

export interface GetRecentCommitResponse {
  recentCommit: GitCommit;
}
