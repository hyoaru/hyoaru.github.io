import { commandBus } from "@/shared/infrastructure/command-bus";
import { queryOptions } from "@tanstack/react-query";
import {
  GetCareerHistory,
  GetCertifications,
  GetPersonalImageUrl,
  GetTechnologies,
} from "./application/commands";
import {
  DecoratedProfileRepository,
  DecoratedTechnologyRepository,
  StaticProfileRepository,
  StaticTechnologyRepository,
} from "./infrastructure/adapters";

const profileRepository = new DecoratedProfileRepository(
  new StaticProfileRepository(),
);
const technologyRepository = new DecoratedTechnologyRepository(
  new StaticTechnologyRepository(),
);

export const identityApi = {
  baseKey: ["identity"] as const,
  query: {
    personalImageUrl: () =>
      queryOptions({
        queryKey: [...identityApi.baseKey, "personal-image"],
        queryFn: () =>
          commandBus.dispatch(new GetPersonalImageUrl({ profileRepository })),
        staleTime: Infinity,
      }),
    careerHistory: () =>
      queryOptions({
        queryKey: [...identityApi.baseKey, "career-history"],
        queryFn: () =>
          commandBus.dispatch(new GetCareerHistory({ profileRepository })),
        staleTime: Infinity,
      }),
    technologies: () =>
      queryOptions({
        queryKey: [...identityApi.baseKey, "technologies"],
        queryFn: () =>
          commandBus.dispatch(new GetTechnologies({ technologyRepository })),
        staleTime: Infinity,
      }),
    certifications: () =>
      queryOptions({
        queryKey: [...identityApi.baseKey, "certifications"],
        queryFn: () =>
          commandBus.dispatch(new GetCertifications({ profileRepository })),
        staleTime: Infinity,
      }),
  },
};
