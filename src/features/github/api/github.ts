import { queryOptions } from "@tanstack/react-query";
import { githubClient } from "../integrations/github-client";

export const githubApi = {
  baseKey: ["github"] as const,
  query: {
    recentCommit: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...githubApi.baseKey, "recent-push"],
        queryFn: () => githubClient.getRecentCommit(username),
        staleTime: 60 * 1000 * 5, // 5 minutes
      }),

    contributionStatus: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...githubApi.baseKey, "contribution-stats"],
        queryFn: () => githubClient.getContributionStats(username),
        staleTime: 60 * 1000 * 60, // 1 hour
      }),

    userInformation: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...githubApi.baseKey, "contribution-stats"],
        queryFn: () => githubClient.getContributionStats(username),
        staleTime: 60 * 1000 * 60, // 1 hour
      }),
  },
};
