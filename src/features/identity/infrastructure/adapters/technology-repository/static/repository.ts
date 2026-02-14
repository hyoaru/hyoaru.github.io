import {
  TechnologyRepositoryError,
  type TechnologyRepository,
} from "@/features/identity/application/ports";
import { Technology } from "@/features/identity/domain/entities";
import technologies from "@/shared/assets/portfolio-resources/data/technologies.json";

export class StaticTechnologyRepository implements TechnologyRepository {
  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (error instanceof TechnologyRepositoryError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new TechnologyRepositoryError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getTechnologies(): Promise<Technology[]> {
    return this.request<Technology[]>(async () => {
      return Promise.resolve(
        technologies.map(
          (t) =>
            new Technology({
              name: t.name,
              logoUrl: `https://cdn.simpleicons.org/${t.simple_icon_key}`,
            }),
        ),
      );
    });
  }
}
