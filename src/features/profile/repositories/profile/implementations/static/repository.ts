import { StaticPortfolioResourcesClient } from "@/shared/integrations/static-portfolio-resources-client/client";
import { PersonalImageNotFoundError } from "../../errors";
import type { ProfileRepository } from "../../interface";

export class StaticProfileRepository implements ProfileRepository {
  portfolioRepositoryClient: StaticPortfolioResourcesClient;

  public constructor(profileRepositoryClient?: StaticPortfolioResourcesClient) {
    this.portfolioRepositoryClient =
      profileRepositoryClient ?? new StaticPortfolioResourcesClient();
  }

  public async getPersonalImageUrl(): Promise<string> {
    try {
      return await this.portfolioRepositoryClient.getPersonalImageUrl();
    } catch {
      throw new PersonalImageNotFoundError();
    }
  }
}
