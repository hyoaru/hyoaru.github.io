import type { GithubActor, GithubRepository } from "../types";

export type GithubEvent = {
  id: string;
  type: string;
  actor: GithubActor;
  repository: GithubRepository;
  createdAt: string;
};
