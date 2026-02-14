import type { CareerExperience, Technology } from "./types";
import {
  StaticPortfolioResourcesClientError,
  StaticPortfolioResourcesClientFileNotFoundError,
} from "./errors";

import technologies from "@/shared/data-sources/portfolio-resources/data/technologies.json";
import experiences from "@/shared/data-sources/portfolio-resources/data/experiences.json";

const images = import.meta.glob(
  "../../data-sources/portfolio-resources/assets/images/*.jpg",
  {
    eager: true,
    import: "default",
    query: "?format=webp&meta",
  },
);

export class StaticPortfolioResourcesClient {
  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (error instanceof StaticPortfolioResourcesClientError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new StaticPortfolioResourcesClientError(
        `Internal Integration Error: ${message}`,
        { cause: error },
      );
    }
  }

  public async getPersonalImageUrl(): Promise<string> {
    return this.request<string>(async () => {
      const filename = "personal-image.jpg";

      const key = Object.keys(images).find((key) => key.includes(filename));
      if (!key)
        throw new StaticPortfolioResourcesClientFileNotFoundError(filename);

      return Promise.resolve(images[key] as string);
    });
  }

  public async getTechnologies(): Promise<Technology[]> {
    return this.request<Technology[]>(async () => {
      return Promise.resolve(technologies);
    });
  }

  public async getExperiences(): Promise<CareerExperience[]> {
    return this.request<CareerExperience[]>(async () => {
      return Promise.resolve(experiences);
    });
  }
}
