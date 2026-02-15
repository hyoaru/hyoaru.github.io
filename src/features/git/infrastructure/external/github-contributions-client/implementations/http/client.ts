import axios, { type AxiosInstance } from "axios";
import type {
  GithubContributionsRequest,
  GithubContributionsResponse,
} from "../../dto";
import {
  GithubContributionsClientError,
  GithubContributionsClientRequestError,
} from "../../errors";
import type { GithubContributionsClient } from "../../interface";
import type { HttpGithubContributions } from "./schemas";

export class HttpGithubContributionsClient implements GithubContributionsClient {
  private readonly api: AxiosInstance;

  public constructor(api?: AxiosInstance) {
    this.api =
      api ||
      axios.create({
        baseURL: "https://github-contributions-api.jogruber.de/v4",
      });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof GithubContributionsClientError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new GithubContributionsClientRequestError(
          `An error has occured while requesting: ${error.message}`,
          { cause: error },
        );
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new GithubContributionsClientError(
        `An error has occured: ${message}`,
        {
          cause: error,
        },
      );
    }
  }

  public async getContributions(
    request: GithubContributionsRequest,
  ): Promise<GithubContributionsResponse> {
    return await this.request(async () => {
      const response = await this.api.get<HttpGithubContributions>(
        `/${request.username}`,
      );

      return { contributions: response.data.contributions };
    });
  }
}
