import {
  GithubBaseUserInformation,
  GithubContributionStats,
  GithubEvent,
  GithubRecentCommit,
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

  getRecentCommit: async (): Promise<GithubRecentCommit> => {
    const url = "https://api.github.com/users/hyoaru/events";
    return await axios
      .get<GithubEvent>(url)
      .then((response) => response.data)
      .then(
        (events) => events.filter((event) => event.type === "PushEvent")?.[0],
      )
      .then((recentPushEvent) => {
        const commits = recentPushEvent.payload.commits;
        const data: GithubRecentCommit = {
          repository_name: recentPushEvent.repo.name,
          commit_message: commits?.[commits.length - 1]?.message,
          created_at: recentPushEvent.created_at,
        };
        return data;
      });
  },
};
