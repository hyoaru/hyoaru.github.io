import { logger } from "@/core/infrastructure/logger";
import type { TechnologyRepository } from "@/features/identity/application/ports/technology-repository";
import type { Technology } from "@/features/identity/domain/entities";

export class DecoratedTechnologyRepository implements TechnologyRepository {
  private inner: TechnologyRepository;

  public constructor(inner: TechnologyRepository) {
    this.inner = inner;
  }

  public async getTechnologies(): Promise<Technology[]> {
    try {
      logger.debug("Getting technologies");
      const technologies = await this.inner.getTechnologies();
      logger.debug(`Got ${technologies.length} technologies`);
      return technologies;
    } catch (error) {
      logger.error("Error getting technologies", { error });
      throw error;
    }
  }
}
