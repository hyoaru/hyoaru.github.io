import { queryOptions } from "@tanstack/react-query";
import { GetTechnologies, technologyService } from "./service";

export const technologyApi = {
  baseKey: ["technology"] as const,
  query: {
    technologies: () =>
      queryOptions({
        queryKey: [...technologyApi.baseKey, "technologies"],
        queryFn: () => technologyService.execute(new GetTechnologies()),
        staleTime: Infinity,
      }),
  },
};
