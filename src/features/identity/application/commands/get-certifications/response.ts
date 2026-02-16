import type { Certification } from "@/features/identity/domain/entities";

export interface GetCertificationsResponse {
  certifications: Certification[];
}
