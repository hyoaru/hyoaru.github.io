import axios from "axios";
import type { GetContributionStatsResponse } from "../types";
import type { GithubClientOperationInterface } from "./interface";

type GithubContributionStats = {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
};

export class GetContributionStats implements GithubClientOperationInterface<GetContributionStatsResponse> {
  username: string;

  public constructor(username: string | null = null) {
    this.username = username ?? "hyoaru";
  }

  public async execute(): Promise<GetContributionStatsResponse> {
    const url = `https://github-contributions-api.jogruber.de/v4/${this.username}`;
    const response = await axios.get<GithubContributionStats>(url);
    const totalContribution = Object.values(response.data.total).reduce(
      (total: number, value: number) => total + value,
      0,
    );

    return { totalContribution: totalContribution, ...response.data };
  }
}
