import { HttpGithubClient } from "./implementations/http";

export * from "./entities";
export * from "./errors";
export * from "./interface";

export const githubClient = new HttpGithubClient();
