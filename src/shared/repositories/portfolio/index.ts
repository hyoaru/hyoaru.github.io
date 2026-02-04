export * from "./errors";
export * from "./implementations";
export type { PortfolioRepositoryInterface } from "./interface";

import { StaticPortfolioRepository } from "./implementations";
export const portfolioRepository = new StaticPortfolioRepository();
