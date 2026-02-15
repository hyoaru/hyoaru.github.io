import type { GithubActor, GithubRepository } from "../types";

export type GithubEventsResponse = {
  type: string;
  actor: GithubActor;
  repository: GithubRepository;
  createdAt: string;
};
