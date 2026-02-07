import { queryOptions } from "@tanstack/react-query";
import { GetRecentTrack, listeningService } from "./service";

export const listeningApi = {
  baseKey: ["listening"] as const,
  query: {
    recentCommit: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...listeningApi.baseKey, "recent-track"],
        queryFn: () => listeningService.execute(new GetRecentTrack(username)),
        staleTime: 60 * 1000 * 2, // 2 minutes
      }),
  },
};
