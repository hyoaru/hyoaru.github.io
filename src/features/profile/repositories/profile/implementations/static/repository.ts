import { StaticPortfolioResourcesClientFileNotFoundError } from "@/shared/integrations";
import { StaticPortfolioResourcesClient } from "@/shared/integrations/static-portfolio-resources-client/client";
import {
  ProfileRepositoryError,
  ProfileRepositoryErrorPersonalImageNotFoundError,
} from "../../errors";
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
    } catch (error) {
      if (error instanceof StaticPortfolioResourcesClientFileNotFoundError) {
        throw new ProfileRepositoryErrorPersonalImageNotFoundError({
          cause: error,
        });
      }

      throw new ProfileRepositoryError(
        "Unable to Retrieve Personal Image URL",
        { cause: error },
      );
    }
  }
}
