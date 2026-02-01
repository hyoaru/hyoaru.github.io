import type { StaticImageRegistryOperationInterface } from "@/utilities/static-image-registry/operation-interface";
import type { StaticImageRegistryInterface } from "@/utilities/static-image-registry/registry-interface";
import { PortfolioResourcesStaticImageRegistry } from "../registry";

export class Get implements StaticImageRegistryOperationInterface<string> {
  filename: string;

  public constructor(filename: string) {
    this.filename = filename;
  }

  public execute(registry: StaticImageRegistryInterface): string {
    if (!(registry instanceof PortfolioResourcesStaticImageRegistry)) {
      throw new TypeError(
        "Registry must be an instance of 'PortfolioResourcesStaticImageRegistry'",
      );
    }

    const typedRegistry = registry as PortfolioResourcesStaticImageRegistry;

    const key = Object.keys(typedRegistry.images).find((key) =>
      key.includes(this.filename),
    );

    if (!key)
      throw new Error(
        `Image with filename "${this.filename}" not found in registry.`,
      );

    return typedRegistry.images[key];
  }
}
