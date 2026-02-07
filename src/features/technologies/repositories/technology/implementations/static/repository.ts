import { StaticPortfolioResourcesClient } from "@/shared/integrations/static-portfolio-resources-client/client";
import { TechnologyRepositoryError } from "../../errors";
import type { TechnologyRepository } from "../../interface";
import type { Technology } from "../../entities";

export class StaticTechnologyRepository implements TechnologyRepository {
  portfolioRepositoryClient: StaticPortfolioResourcesClient;

  public constructor(profileRepositoryClient?: StaticPortfolioResourcesClient) {
    this.portfolioRepositoryClient =
      profileRepositoryClient ?? new StaticPortfolioResourcesClient();
  }

  public async getTechnologies(): Promise<Technology[]> {
    try {
      return await this.portfolioRepositoryClient.getTechnologies();
    } catch (error) {
      throw new TechnologyRepositoryError("Unable to get technologies", {
        cause: error,
      });
    }
  }
}
