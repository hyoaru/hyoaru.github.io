import type { HttpGithubActor } from "./actor";
import type { HttpGithubRepository } from "./repository";

export type HttpGithubEvent = {
  id: string;
  type: string;
  actor: HttpGithubActor;
  repo: HttpGithubRepository;
  created_at: string;
};
