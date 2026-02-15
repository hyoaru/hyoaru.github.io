import type { GitCommit } from "@/features/git/domain/entities";

export class GetUserResponse {
  user: GitCommit;

  public constructor(init: GetUserResponse) {
    this.user = init.user;
  }
}
