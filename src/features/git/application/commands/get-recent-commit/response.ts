import type { GitCommit } from "@/features/git/domain/entities";

export class GetRecentCommitResponse {
  recentCommit: GitCommit;

  public constructor(init: GetRecentCommitResponse) {
    this.recentCommit = init.recentCommit;
  }
}
