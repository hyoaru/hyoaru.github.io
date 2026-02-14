import { queryOptions } from "@tanstack/react-query";
import { GetPersonalImageUrl, profileService } from "./service";

export const profileApi = {
  baseKey: ["profile"] as const,
  query: {
    personalImageUrl: () =>
      queryOptions({
        queryKey: [...profileApi.baseKey, "personal-image"],
        queryFn: () => profileService.execute(new GetPersonalImageUrl()),
        staleTime: Infinity,
      }),
  },
};
