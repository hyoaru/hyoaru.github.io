export * from "./errors";
export * from "./implementations";
export * from "./interface";

import { StaticProfileRepository } from "./implementations";
export const profileRepository = new StaticProfileRepository();
