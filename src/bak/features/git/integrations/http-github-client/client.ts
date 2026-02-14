import axios, { type AxiosInstance } from "axios";
import type { ContributionStatsDTO, EventDTO, UserInformationDTO } from "./dto";
import type {
  ContributionStats,
  RecentCommit,
  UserInformation,
} from "./entities";
import {
  HttpGithubClientError,
  HttpGithubClientNoRecentPushError,
  HttpGithubClientRequestError,
} from "./errors";

export class HttpGithubClient {
  private readonly api: AxiosInstance;
  private readonly statsApi: AxiosInstance;

  constructor(api?: AxiosInstance, statsApi?: AxiosInstance) {
    this.api = api ?? axios.create({ baseURL: "https://api.github.com" });
    this.statsApi =
      statsApi ??
      axios.create({
        baseURL: "https://github-contributions-api.jogruber.de/v4",
      });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof HttpGithubClientError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new HttpGithubClientRequestError(error.response?.status ?? 500, {
          cause: error,
        });
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new HttpGithubClientError(
        `Internal Integration Error: ${message}`,
        { cause: error },
      );
    }
  }

  public async getRecentCommit(username: string): Promise<RecentCommit> {
    return this.request(async () => {
      const { data } = await this.api.get<EventDTO[]>(
        `/users/${username}/events`,
      );

      const pushEvent = data.find((event) => event.type === "PushEvent");
      if (!pushEvent) throw new HttpGithubClientNoRecentPushError(username);

      return {
        username,
        repository: pushEvent.repo.name,
        created_at: pushEvent.created_at,
      };
    });
  }

  public async getContributionStats(
    username: string,
  ): Promise<ContributionStats> {
    return this.request(async () => {
      const { data } = await this.statsApi.get<ContributionStatsDTO>(
        `/${username}`,
      );

      const totalContribution = Object.values(data.total ?? {}).reduce(
        (acc, val) => acc + val,
        0,
      );

      return {
        totalContribution,
        ...data,
      };
    });
  }

  public async getUserInformation(username: string): Promise<UserInformation> {
    return this.request(async () => {
      const { data } = await this.api.get<UserInformationDTO>(
        `/users/${username}`,
      );

      return {
        ...data,
        hireable: data.hireable ?? false,
      };
    });
  }
}
