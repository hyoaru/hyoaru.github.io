import { ConsoleLogger } from "./console-logger";
import type { Logger } from "./interface";

export type { Logger } from "./interface";

export const logger: Logger = new ConsoleLogger();
