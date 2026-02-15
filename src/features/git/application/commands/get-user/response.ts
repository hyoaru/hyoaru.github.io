import type { GitUser } from "@/features/git/domain/entities";

export interface GetUserResponse {
  user: GitUser;
}
