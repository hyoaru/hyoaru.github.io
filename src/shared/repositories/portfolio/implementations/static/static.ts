import { PersonalImageNotFoundError } from "../../errors";
import type { PortfolioRepositoryInterface } from "../../interface";

const images = import.meta.glob("./data-source/assets/images/*.jpg", {
  eager: true,
  import: "default",
  query: "?format=webp&meta",
});

export class StaticPortfolioRepository implements PortfolioRepositoryInterface {
  public getPersonalImageUrl(): Promise<string> {
    const filename = "personal-image.jpg";
    console.log(images);

    const key = Object.keys(images).find((key) => key.includes(filename));
    if (!key) throw new PersonalImageNotFoundError();

    return Promise.resolve(images[key] as string);
  }
}
