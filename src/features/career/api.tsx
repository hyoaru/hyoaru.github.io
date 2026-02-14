import { queryOptions } from "@tanstack/react-query";
import { GetCareerExperiences, careerService } from "./service";

export const careerApi = {
  baseKey: ["career"] as const,
  query: {
    experiences: () =>
      queryOptions({
        queryKey: [...careerApi.baseKey, "experiences"],
        queryFn: () => careerService.execute(new GetCareerExperiences()),
        staleTime: Infinity,
      }),
  },
};
