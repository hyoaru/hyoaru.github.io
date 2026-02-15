import axios, { type AxiosInstance } from "axios";
import type {
  GithubEventsRequest,
  GithubEventsResponse,
  GithubUserRequest,
  GithubUserResponse,
} from "../../dto";
import { GithubClientError, GithubClientRequestError } from "../../errors";
import type { GithubClient } from "../../interface";

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
      const { data } = await this.api.get(`/users/${request.username}/events`);

      return {
        type: data["type"],
        actor: {
          id: data["actor"]["id"],
          username: data["actor"]["login"],
          avatarUrl: data["actor"]["avatar_url"],
        },
        repository: {
          id: data["repo"]["id"],
          name: data["repo"]["name"],
          url: data["repo"]["url"],
        },
        createdAt: data["created_at"],
      };
    });
  }

  public async getUser(
    request: GithubUserRequest,
  ): Promise<GithubUserResponse> {
    return await this.request(async () => {
      const { data } = await this.api.get(`/users/${request.username}`);

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
