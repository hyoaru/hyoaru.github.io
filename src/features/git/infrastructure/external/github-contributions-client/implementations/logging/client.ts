import { logger } from "@/core/infrastructure/logger";
import type {
  GithubContributionsRequest,
  GithubContributionsResponse,
} from "../../dto";
import type { GithubContributionsClient } from "../../interface";

export class LoggingGithubContributionsClient implements GithubContributionsClient {
  private inner: GithubContributionsClient;

  public constructor(inner: GithubContributionsClient) {
    this.inner = inner;
  }

  public async getContributions(
    request: GithubContributionsRequest,
  ): Promise<GithubContributionsResponse> {
    try {
      logger.info(`Fetching contributions for user: ${request.username}`);
      const response = await this.inner.getContributions(request);
      logger.info(
        `Successfully fetched contributions for user: ${request.username}`,
      );
      return response;
    } catch (error) {
      logger.error(
        `Error fetching contributions for user: ${request.username}`,
      );
      throw error;
    }
  }
}
