import type {
  GithubEventsRequest,
  GithubEventsResponse,
  GithubUserRequest,
  GithubUserResponse,
} from "../../dto";
import type { GithubClient } from "../../interface";
import { LoggingGithubClient } from "../logging";

export class DecoratedGithubClient implements GithubClient {
  private inner: GithubClient;

  public constructor(inner: GithubClient) {
    this.inner = new LoggingGithubClient(inner);
  }
  public async getEvents(
    request: GithubEventsRequest,
  ): Promise<GithubEventsResponse> {
    return await this.inner.getEvents(request);
  }
  public async getUser(
    request: GithubUserRequest,
  ): Promise<GithubUserResponse> {
    return await this.inner.getUser(request);
  }
}
