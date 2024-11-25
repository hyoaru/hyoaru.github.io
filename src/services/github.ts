import {
  GithubBaseUserInformation,
  GithubContributionStats,
} from "@/types/github";

import axios from "axios";

export const githubService = {
  getContributionStats: async (): Promise<GithubContributionStats> => {
    const url = "https://github-contributions-api.jogruber.de/v4/hyoaru";
    return await axios
      .get<GithubContributionStats>(url)
      .then((response) => response.data)
      .then((contributionStats) => {
        contributionStats.totalContribution = Object.values(
          contributionStats.total,
        ).reduce((total: number, value: number) => total + value, 0);

        return contributionStats;
      });
  },

  getBaseUserInformation: async (): Promise<GithubBaseUserInformation> => {
    const url = "https://api.github.com/users/hyoaru";
    return await axios
      .get<GithubBaseUserInformation>(url)
      .then((response) => response.data);
  },
};
