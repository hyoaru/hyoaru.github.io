import type {
  GetCareerHistoryResponse,
} from "@/application/use-cases/get-career-history";
import type {
  GetCertificationsResponse,
} from "@/application/use-cases/get-certifications";
import { queryOptions } from "@tanstack/react-query";
import { container } from "../container";

export const useProfileActions = () => {
  return {
    getCareerHistory: () =>
      queryOptions({
        queryKey: ["profile", "career-history"],
        queryFn: (): Promise<GetCareerHistoryResponse> => {
          return container.profile.getCareerHistory.execute();
        },
        staleTime: Infinity,
      }),
    getCertifications: () =>
      queryOptions({
        queryKey: ["profile", "certifications"],
        queryFn: (): Promise<GetCertificationsResponse> => {
          return container.profile.getCertifications.execute();
        },
        staleTime: Infinity,
      }),
  };
};
