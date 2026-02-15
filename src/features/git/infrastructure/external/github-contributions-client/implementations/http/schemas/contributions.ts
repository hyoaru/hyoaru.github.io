import type { HttpGithubContribution } from "./contribution";

export interface HttpGithubContributions {
  total: Record<string, number>;
  contributions: HttpGithubContribution[];
}
