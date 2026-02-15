import type { GitContribution } from "@/features/git/domain/value-objects";

export class GetContributionsResponse {
  contributions: GitContribution[];

  public constructor(init: GetContributionsResponse) {
    this.contributions = init.contributions;
  }
}
