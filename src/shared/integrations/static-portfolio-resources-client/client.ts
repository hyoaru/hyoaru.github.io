import {
  StaticPortfolioResourcesClientError,
  StaticPortfolioResourcesClientFileNotFoundError,
} from "./errors";

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
}
