import { commandBus } from "@/core/infrastructure/command-bus";
import { queryOptions } from "@tanstack/react-query";
import { GetCareerHistory, GetPersonalImageUrl } from "./application/commands";
import {
  DecoratedProfileRepository,
  StaticProfileRepository,
} from "./infrastructure/adapters";

const profileRepository = new DecoratedProfileRepository(
  new StaticProfileRepository(),
);

export const identityApi = {
  baseKey: ["identity"] as const,
  query: {
    personalImageUrl: () =>
      queryOptions({
        queryKey: [...identityApi.baseKey, "personal-image"],
        queryFn: () =>
          commandBus.dispatch(new GetPersonalImageUrl(profileRepository)),
        staleTime: Infinity,
      }),

    careerHistory: () =>
      queryOptions({
        queryKey: [...identityApi.baseKey, "career-history"],
        queryFn: () =>
          commandBus.dispatch(new GetCareerHistory(profileRepository)),
        staleTime: Infinity,
      }),
  },
};
