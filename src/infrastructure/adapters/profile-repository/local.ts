import {
  type ProfileRepository,
  ProfileRepositoryError,
} from "@/application/ports/profile-repository";
import { Certification, Experience } from "@/domain/entities";
import certifications from "@/infrastructure/assets/data/certifications.json";
import experiences from "@/infrastructure/assets/data/experiences.json";

const certificationImages = import.meta.glob(
  "/src/infrastructure/assets/images/certifications/*.jpg",
  {
    eager: true,
    import: "default",
  },
);

export class LocalProfileRepository implements ProfileRepository {
  public async getCareerHistory(): Promise<Experience[]> {
    try {
      return experiences.map((e) => {
        const { started_at, ended_at, ...rest } = e;
        return new Experience({
          startedAt: started_at,
          endedAt: ended_at,
          ...rest,
        });
      });
    } catch (error) {
      if (error instanceof ProfileRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new ProfileRepositoryError(`Get career history error: ${message}`, {
        cause: error,
      });
    }
  }

  public async getCertifications(): Promise<Certification[]> {
    try {
      return certifications.map((c) => {
        const { issued_at, image, ...rest } = c;
        const key = Object.keys(certificationImages).find((k) =>
          k.includes(image),
        );

        return new Certification({
          issuedAt: issued_at,
          imageUrl: key ? (certificationImages[key] as string) : undefined,
          ...rest,
        });
      });
    } catch (error) {
      if (error instanceof ProfileRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new ProfileRepositoryError(`Get certifications error: ${message}`, {
        cause: error,
      });
    }
  }
}
