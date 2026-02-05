import { HttpGithubClient } from "./http";

export * from "./entities";
export * from "./errors";
export * from "./interface";

export const githubClient = new HttpGithubClient();
