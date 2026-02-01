import type { StaticImageRegistryOperationInterface } from "./operation-interface";

export interface StaticImageRegistryInterface {
  execute<T>(operation: StaticImageRegistryOperationInterface<T>): T;
}
