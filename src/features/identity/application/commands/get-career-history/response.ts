import type { Experience } from "@/features/identity/domain/entities";

export interface GetCareerHistoryResponse {
  careerHistory: Experience[];
}
