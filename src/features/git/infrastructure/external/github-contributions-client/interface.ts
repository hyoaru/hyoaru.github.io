import type {
  GithubContributionsRequest,
  GithubContributionsResponse,
} from "./dto";

export interface GithubContributionsClient {
  getContributions(
    request: GithubContributionsRequest,
  ): Promise<GithubContributionsResponse>;
}
