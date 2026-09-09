import type { GetRecentListeningTrackResponse } from "@/application/use-cases/get-recent-listening-track";
import { queryOptions } from "@tanstack/react-query";
import { container } from "../container";

export const useListeningActions = () => {
  return {
    getRecentTrack: () =>
      queryOptions({
        queryKey: ["listening", "recent-track"],
        queryFn: (): Promise<GetRecentListeningTrackResponse> => {
          return container.listening.getRecentTrack.execute({
            username: "hyoaru",
          });
        },
      }),
  };
};
