import {
  type ProfileRepository,
  ProfileRepositoryError,
  ProfileRepositoryResourceNotFoundError,
} from "@/features/identity/application/ports";
import { Experience } from "@/features/identity/domain/entities";
import experiences from "@/shared/assets/portfolio-resources/data/experiences.json";

const images = import.meta.glob(
  "/src/shared/assets/portfolio-resources/assets/images/*.jpg",
  {
    eager: true,
    import: "default",
    query: "?format=webp&meta",
  },
);

export class StaticProfileRepository implements ProfileRepository {
  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (error instanceof ProfileRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new ProfileRepositoryError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getPersonalImageUrl(): Promise<string> {
    return await this.request(async () => {
      const filename = "personal-image.jpg";
      const key = Object.keys(images).find((key) => key.includes(filename));
      if (!key) throw new ProfileRepositoryResourceNotFoundError(filename);
      return Promise.resolve(images[key] as string);
    });
  }

  public async getCareerHistory(): Promise<Experience[]> {
    return this.request<Experience[]>(async () => {
      return Promise.resolve(
        experiences.map((e) => {
          const { started_at, ended_at, ...rest } = e;
          return new Experience({
            startedAt: started_at,
            endedAt: ended_at,
            ...rest,
          });
        }),
      );
    });
  }
}
