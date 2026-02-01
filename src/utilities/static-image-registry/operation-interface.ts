import type { StaticImageRegistryInterface } from "./registry-interface";

export interface StaticImageRegistryOperationInterface<T> {
  execute(registry: StaticImageRegistryInterface): T;
}
