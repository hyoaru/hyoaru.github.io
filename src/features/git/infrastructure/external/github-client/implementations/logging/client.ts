import { logger } from "@/core/infrastructure/logger";
import type {
  GithubEventsRequest,
  GithubEventsResponse,
  GithubUserRequest,
  GithubUserResponse,
} from "../../dto";
import type { GithubClient } from "../../interface";

export class LoggingGithubClient implements GithubClient {
  private inner: GithubClient;

  public constructor(inner: GithubClient) {
    this.inner = inner;
  }

  public async getEvents(
    request: GithubEventsRequest,
  ): Promise<GithubEventsResponse> {
    try {
      logger.info(`Requesting events for user: ${request.username}`);
      const response = await this.inner.getEvents(request);
      logger.info(`Received events for user: ${request.username}`);
      return response;
    } catch (error) {
      logger.error(
        `An error has occurred while requesting events for user: ${request.username}.`,
      );
      throw error;
    }
  }

  public async getUser(
    request: GithubUserRequest,
  ): Promise<GithubUserResponse> {
    try {
      logger.info(`Requesting user information for user: ${request.username}`);
      const response = await this.inner.getUser(request);
      logger.info(`Received user information for user: ${request.username}`);
      return response;
    } catch (error) {
      logger.error(
        `An error has occurred while requesting user information for user: ${request.username}.`,
      );
      throw error;
    }
  }
}
