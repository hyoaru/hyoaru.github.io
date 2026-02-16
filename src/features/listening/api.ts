import { commandBus } from "@/shared/infrastructure/command-bus";
import { queryOptions } from "@tanstack/react-query";
import { GetRecentTrack } from "./application/commands";
import {
  DecoratedListeningRepository,
  LastfmListeningRepository,
} from "./infrastructure/adapters";
import {
  DecoratedLastfmClient,
  HttpLastfmClient,
} from "./infrastructure/external";

const lastfmClient = new DecoratedLastfmClient(new HttpLastfmClient());
const listeningRepository = new DecoratedListeningRepository(
  new LastfmListeningRepository({ lastfmClient }),
);

export const listeningApi = {
  baseKey: ["listening"] as const,
  query: {
    recentTrack: (username: string = "hyoaru") =>
      queryOptions({
        queryKey: [...listeningApi.baseKey, "recent-track"],
        queryFn: () =>
          commandBus.dispatch(
            new GetRecentTrack({
              request: { username },
              listeningRepository,
            }),
          ),
        staleTime: 60 * 1000 * 2, // 2 minutes
      }),
  },
};
