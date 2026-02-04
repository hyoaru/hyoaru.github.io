import { queryOptions } from "@tanstack/react-query";
import { portfolioRepository } from "../repositories";

export const portfolioApi = {
  baseKey: ["portfolio"] as const,
  query: {
    personalImageUrl: () =>
      queryOptions({
        queryKey: [...portfolioApi.baseKey, "personal-image"],
        queryFn: () => portfolioRepository.getPersonalImageUrl(),
        staleTime: Infinity,
      }),
  },
};
