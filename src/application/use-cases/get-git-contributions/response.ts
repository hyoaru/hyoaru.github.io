import type { GitContribution } from "@/domain/value-objects";

export interface GetGitContributionsResponse {
  total: number;
  contributions: GitContribution[];
}
