import type {
  GetRecentListeningTrackRequest,
  GetRecentListeningTrackResponse,
} from "@/application/use-cases/get-recent-listening-track";
import { queryOptions } from "@tanstack/react-query";
import { container } from "../container";

export const useListeningActions = () => {
  return {
    getRecentTrack: (request: GetRecentListeningTrackRequest) =>
      queryOptions({
        queryKey: ["listening", "recent-track", request],
        queryFn: (): Promise<GetRecentListeningTrackResponse> => {
          return container.listening.getRecentTrack.execute(request);
        },
      }),
  };
};
