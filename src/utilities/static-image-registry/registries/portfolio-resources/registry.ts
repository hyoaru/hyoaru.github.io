import type { StaticImageRegistryOperationInterface } from "../../operation-interface";
import type { StaticImageRegistryInterface } from "../../registry-interface";

export class PortfolioResourcesStaticImageRegistry implements StaticImageRegistryInterface {
  public images: Record<string, string>;

  public constructor() {
    this.images = import.meta.glob(
      "/src/assets/portfolio-resources/assets/images/*.jpg",
      { eager: true, import: "default", query: "?format=webp&meta" },
    );
  }
  public execute<T>(operation: StaticImageRegistryOperationInterface<T>): T {
    return operation.execute(this);
  }
}
