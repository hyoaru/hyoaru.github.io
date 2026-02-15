import type {
  GithubContributionsRequest,
  GithubContributionsResponse,
} from "../../dto";
import type { GithubContributionsClient } from "../../interface";
import { LoggingGithubContributionsClient } from "../logging";

export class DecoratedGithubContributionsClient implements GithubContributionsClient {
  private inner: GithubContributionsClient;

  public constructor(inner: GithubContributionsClient) {
    this.inner = new LoggingGithubContributionsClient(inner);
  }
  public async getContributions(
    request: GithubContributionsRequest,
  ): Promise<GithubContributionsResponse> {
    return await this.inner.getContributions(request);
  }
}
