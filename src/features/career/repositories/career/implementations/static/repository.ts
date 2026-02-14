import { StaticPortfolioResourcesClient } from "@/shared/integrations/static-portfolio-resources-client/client";
import { CareerRepositoryError } from "../../errors";
import type { CareerRepository } from "../../interface";
import type { CareerExperience } from "../../entities";

export class StaticCareerRepository implements CareerRepository {
  portfolioRepositoryClient: StaticPortfolioResourcesClient;

  public constructor(profileRepositoryClient?: StaticPortfolioResourcesClient) {
    this.portfolioRepositoryClient =
      profileRepositoryClient ?? new StaticPortfolioResourcesClient();
  }

  public async getExperiences(): Promise<CareerExperience[]> {
    try {
      return await this.portfolioRepositoryClient.getExperiences();
    } catch (error) {
      throw new CareerRepositoryError("Unable to get experiences", {
        cause: error,
      });
    }
  }
}
