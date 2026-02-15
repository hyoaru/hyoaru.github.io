import type { GitContribution } from "@/features/git/domain/value-objects";

export interface GetContributionsResponse {
  contributions: GitContribution[];
}
