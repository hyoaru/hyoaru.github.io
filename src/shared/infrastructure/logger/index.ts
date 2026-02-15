import { ConsoleLogger } from "./implementations";
import type { Logger } from "./interface";

export * from "./interface";
export * from "./implementations";

export const logger: Logger = new ConsoleLogger();
