import axios, { type AxiosInstance } from "axios";
import type {
  GithubEventsRequest,
  GithubEventsResponse,
  GithubUserRequest,
  GithubUserResponse,
} from "../../dto";
import { GithubClientError, GithubClientRequestError } from "../../errors";
import type { GithubClient } from "../../interface";
import type { HttpGithubEvent, HttpGithubUser } from "./schemas";

export class HttpGithubClient implements GithubClient {
  private readonly api: AxiosInstance;

  public constructor(api?: AxiosInstance) {
    this.api = api ?? axios.create({ baseURL: "https://api.github.com" });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof GithubClientError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new GithubClientRequestError(
          `An error has occured while requesting: ${error.message}`,
          { cause: error },
        );
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new GithubClientError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getEvents(
    request: GithubEventsRequest,
  ): Promise<GithubEventsResponse> {
    return await this.request(async () => {
      const { data: events } = await this.api.get<HttpGithubEvent[]>(
        `/users/${request.username}/events`,
      );

      return events.map((event) => ({
        id: event["id"],
        type: event["type"],
        actor: {
          id: event["actor"]["id"],
          username: event["actor"]["login"],
          avatarUrl: event["actor"]["avatar_url"],
        },
        repository: {
          id: event["repo"]["id"],
          name: event["repo"]["name"],
          url: event["repo"]["url"],
        },
        createdAt: event["created_at"],
      }));
    });
  }

  public async getUser(
    request: GithubUserRequest,
  ): Promise<GithubUserResponse> {
    return await this.request(async () => {
      const { data } = await this.api.get<HttpGithubUser>(
        `/users/${request.username}`,
      );

      return {
        username: data["login"],
        publicRepositories: data["public_repos"],
        company: data["company"],
        location: data["location"],
        hireable: data["hireable"],
        createdAt: data["created_at"],
        updatedAt: data["updated_at"],
      };
    });
  }
}
