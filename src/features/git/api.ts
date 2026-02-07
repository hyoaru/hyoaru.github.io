import { queryOptions } from "@tanstack/react-query";
import {
  GetContributionStats,
  GetRecentCommit,
  GetUserInformation,
  gitService,
} from "./service";

export const gitApi = {
  baseKey: ["git"] as const,
  query: {
    recentCommit: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...gitApi.baseKey, "recent-push"],
        queryFn: () => gitService.execute(new GetRecentCommit(username)),
        staleTime: 60 * 1000 * 5, // 5 minutes
      }),

    contributionStatus: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...gitApi.baseKey, "contribution-stats"],
        queryFn: () => gitService.execute(new GetContributionStats(username)),
        staleTime: 60 * 1000 * 60, // 1 hour
      }),

    userInformation: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...gitApi.baseKey, "user-information"],
        queryFn: () => gitService.execute(new GetUserInformation(username)),
        staleTime: 60 * 1000 * 60, // 1 hour
      }),
  },
};
