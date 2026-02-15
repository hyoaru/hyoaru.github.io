import type { GithubActor, GithubRepository } from "../models";

export interface GithubEvent {
  id: string;
  type: string;
  actor: GithubActor;
  repository: GithubRepository;
  createdAt: string;
}
