import type { GitCommit } from "@/features/git/domain/entities";

export interface GetUserResponse {
  user: GitCommit;
}
