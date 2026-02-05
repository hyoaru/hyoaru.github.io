import axios, { type AxiosInstance } from "axios";
import type {
  ContributionStats,
  RecentCommit,
  UserInformation,
} from "../../entities";
import { GithubApiError, GithubNoRecentPushError } from "../../errors";
import type { GithubClient } from "../../interface";
import type { ContributionStatsDTO, EventDTO, UserInformationDTO } from "./dto";

export class HttpGithubClient implements GithubClient {
  private readonly api: AxiosInstance;
  private readonly statsApi: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: "https://api.github.com" });
    this.statsApi = axios.create({
      baseURL: "https://github-contributions-api.jogruber.de/v4",
    });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new GithubApiError(error.response?.status ?? 500, error.message);
      }
      throw error;
    }
  }

  public async getRecentCommit(username: string): Promise<RecentCommit> {
    return this.request<RecentCommit>(async () => {
      const { data } = await this.api.get<EventDTO[]>(
        `/users/${username}/events`,
      );
      const pushEvent = data.find((event) => event.type === "PushEvent");

      if (!pushEvent) throw new GithubNoRecentPushError(username);

      return {
        username,
        repository: pushEvent.repo.name.split("/").at(-1)!,
        created_at: pushEvent.created_at,
      };
    });
  }

  public async getContributionStats(
    username: string,
  ): Promise<ContributionStats> {
    return this.request<ContributionStats>(async () => {
      const { data } = await this.statsApi.get<ContributionStatsDTO>(
        `/${username}`,
      );

      const totalContribution = Object.values(data.total).reduce(
        (acc, val) => acc + val,
        0,
      );

      return { totalContribution, ...data };
    });
  }

  public async getUserInformation(username: string): Promise<UserInformation> {
    return this.request<UserInformation>(async () => {
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
