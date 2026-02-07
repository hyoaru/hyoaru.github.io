import { FileNotFoundError } from "./errors";

const images = import.meta.glob(
  "../../data-sources/portfolio-resources/assets/images/*.jpg",
  {
    eager: true,
    import: "default",
    query: "?format=webp&meta",
  },
);

export class StaticPortfolioResourcesClient {
  public async getPersonalImageUrl(): Promise<string> {
    const filename = "personal-image.jpg";

    const key = Object.keys(images).find((key) => key.includes(filename));
    if (!key) throw new FileNotFoundError(filename);

    return Promise.resolve(images[key] as string);
  }
}
