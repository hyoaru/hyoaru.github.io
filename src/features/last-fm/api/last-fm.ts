import { queryOptions } from "@tanstack/react-query";
import { lastFmClient } from "../integrations/last-fm-client";

export const lastFmApi = {
  baseKey: ["last-fm"] as const,
  query: {
    recentCommit: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...lastFmApi.baseKey, "recent-push"],
        queryFn: () => lastFmClient.getRecentTrack(username),
        staleTime: 60 * 1000 * 2, // 2 minutes
      }),
  },
};
