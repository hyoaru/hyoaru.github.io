import { HttpLastFmClient } from "./implementations/http";

export * from "./entities";
export * from "./errors";
export * from "./interface";

export const lastFmClient = new HttpLastFmClient();
